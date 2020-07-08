import { Emitter, Particle, ParticleUtils } from "pixi-particles"
import { settings, Point } from "pixi.js";

const helperPoint = new Point();
export default class OnDemandEmitter extends Emitter {
  constructor(...args: any) {
    // @ts-ignore
    super(...args);
  }

  update(delta: number) {
    if (this._autoUpdate) {
      delta = delta / settings.TARGET_FPMS / 1000;
    }

    //if we don't have a parent to add particles to, then don't do anything.
    //this also works as a isDestroyed check
    if (!this._parent) return;
    //update existing particles
    let particle, next;
    for (particle = this._activeParticlesFirst; particle; particle = next) {
      next = particle.next;
      particle.update(delta);
    }


    if (this._emit) {
      //determine if the emitter should stop spawning
      if (this._emitterLife > 0) {
        this._emitterLife -= delta;
        if (this._emitterLife <= 0) {
          this._emitterLife = 0;
          this.emit = false;
        }
      }
    }

    if (this._posChanged) {
      //store current position of the emitter as local variables
      this._prevEmitterPos.x = this.ownerPos.x + this.spawnPos.x;
      this._prevEmitterPos.y = this.ownerPos.y + this.spawnPos.y;
      this._prevPosIsValid = true;
      this._posChanged = false;
    }

    //if we are all done and should destroy ourselves, take care of that
    if (!this._emit && !this._activeParticlesFirst) {
      if (this._completeCallback) {
        const cb = this._completeCallback;
        // @ts-ignore: inherited pixi library does not use strict null check
        this._completeCallback = null;
        cb();
      }
      if (this._destroyWhenComplete) {
        this.destroy();
      }
    }
  }

  spawn(amount:number = 1, timePassed:number = 0, whichArt:number = -1) {

    if (!this._emit) {
      return;
    }

    // determine if we have hit the particle limit
    if (this.particleCount >= this.maxParticles) {
      // Let's kill the oldest to make room for the newest
      // @TODO when amount > 1, maybe kill more?
      this._activeParticlesFirst.kill();
    }

    //determine the particle lifetime
    let lifetime;
    if (this.minLifetime == this.maxLifetime) {
      lifetime = this.minLifetime;
    } else {
      lifetime = Math.random() * (this.maxLifetime - this.minLifetime) + this.minLifetime;
    }

    //only make the particle if it wouldn't immediately destroy itself
    if (timePassed < lifetime) {
      //create enough particles (amount or up to max)
      let i = 0;
      for (let len = Math.min(amount, this.maxParticles - this.particleCount); i < len; ++i) {
        //see if we actually spawn one
        if (this.spawnChance < 1 && Math.random() >= this.spawnChance)
          continue;
        //create particle
        let p;
        if (this._poolFirst) {
          p = this._poolFirst;
          this._poolFirst = this._poolFirst.next;
          // @ts-ignore: inherited pixi library does not use strict null check
          p.next = null;
        } else {
          p = new this.particleConstructor(this);
        }

        //set a random texture if we have more than one
        if (this.particleImages.length > 1) {
          // if using ordered art
          if(whichArt !== -1) {
            // get current art index, then increment for the next particle
            p.applyArt(this.particleImages[whichArt]);
          } else if (this._currentImageIndex !== -1) {
            // get current art index, then increment for the next particle
            p.applyArt(this.particleImages[this._currentImageIndex++]);
            // loop around if needed
            if (this._currentImageIndex < 0 || this._currentImageIndex >= this.particleImages.length) {
              this._currentImageIndex = 0;
            }
          } else {
            // otherwise grab a random one
            p.applyArt(this.particleImages[Math.floor(Math.random() * this.particleImages.length)]);
          }

        } else {
          //if they are actually the same texture, a standard particle
          //will quit early from the texture setting in setTexture().
          p.applyArt(this.particleImages[0]);
        }
        //set up the start and end values
        p.alphaList.reset(this.startAlpha);
        if (this.minimumSpeedMultiplier != 1) {
          p.speedMultiplier = Math.random() * (1 - this.minimumSpeedMultiplier) + this.minimumSpeedMultiplier;
        }
        p.speedList.reset(this.startSpeed);
        p.acceleration.x = this.acceleration.x;
        p.acceleration.y = this.acceleration.y;
        p.maxSpeed = this.maxSpeed;
        if (this.minimumScaleMultiplier != 1) {
          p.scaleMultiplier = Math.random() * (1 - this.minimumScaleMultiplier) + this.minimumScaleMultiplier;
        }
        p.scaleList.reset(this.startScale);
        p.colorList.reset(this.startColor);
        //randomize the rotation speed
        if (this.minRotationSpeed == this.maxRotationSpeed)
          p.rotationSpeed = this.minRotationSpeed;
        else
          p.rotationSpeed = Math.random() * (this.maxRotationSpeed - this.minRotationSpeed) + this.minRotationSpeed;
        p.rotationAcceleration = this.rotationAcceleration;
        p.noRotation = this.noRotation;
        //set up the lifetime
        p.maxLife = lifetime;
        //set the blend mode
        p.blendMode = this.particleBlendMode;
        //set the custom ease, if any
        p.ease = this.customEase;
        //set the extra data, if any
        p.extraData = this.extraData;
        //set additional properties to particle
        this.applyAdditionalProperties(p);
        //call the proper function to handle rotation and position of particle
        this._spawnFunc(p, this._prevEmitterPos.x, this._prevEmitterPos.y, i);
        //initialize particle
        p.init();
        //update the particle by the time passed, so the particles are spread out properly
        p.update(timePassed);//we want a positive delta, because a negative delta messes things up
        //add the particle to the display list
        if (!p.parent) {
          if (this.addAtBack)
            this._parent.addChildAt(p, 0);
          else
            this._parent.addChild(p);
        } else {
          //kind of hacky, but performance friendly
          //shuffle children to correct place
          let children = this._parent.children;
          //avoid using splice if possible
          if (children[0] == p)
            children.shift();
          else if (children[children.length - 1] == p)
            children.pop();
          else {
            let index = children.indexOf(p);
            children.splice(index, 1);
          }
          if (this.addAtBack)
            children.unshift(p);
          else
            children.push(p);
        }
        //add particle to list of active particles
        if (this._activeParticlesLast) {
          this._activeParticlesLast.next = p;
          p.prev = this._activeParticlesLast;
          this._activeParticlesLast = p;
        } else {
          this._activeParticlesLast = this._activeParticlesFirst = p;
        }
        ++this.particleCount;
      }
    }
  }

  protected _spawnRing(p: Particle, emitPosX: number, emitPosY: number): void {
      const spawnCircle = this.spawnCircle;
      // set the initial rotation/direction of the particle based on starting
      // particle angle and rotation of emitter

      if (this.minStartRotation === this.maxStartRotation)
      {
          p.rotation = this.minStartRotation + this.rotation;
      }
      else
      {
          p.rotation = (Math.random() * (this.maxStartRotation - this.minStartRotation)) + this.minStartRotation + this.rotation;
      }
      // place the particle at a random radius in the ring
      if (spawnCircle.minRadius !== spawnCircle.radius)
      {
          helperPoint.x = (Math.random() * (spawnCircle.radius - spawnCircle.minRadius)) + spawnCircle.minRadius;
      }
      else
      {
          helperPoint.x = spawnCircle.radius;
      }
      helperPoint.y = 0;
      // rotate the point to a random angle in the circle
      const angle = (Math.random() * (this.maxStartRotation - this.minStartRotation)) + this.minStartRotation + this.rotation;

      //p.rotation += angle;
      ParticleUtils.rotatePoint(p.rotation, helperPoint);
      // offset by the circle's center
      helperPoint.x += this.spawnCircle.x;
      helperPoint.y += this.spawnCircle.y;
      // rotate the point by the emitter's rotation
      if (this.rotation !== 0)
      {
          ParticleUtils.rotatePoint(this.rotation, helperPoint);
      }
      // set the position, offset by the emitter's position
      p.position.x = emitPosX + helperPoint.x;
      p.position.y = emitPosY + helperPoint.y;
  }
}
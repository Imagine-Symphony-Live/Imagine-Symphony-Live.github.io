import { Graphics, Point, Sprite, BLEND_MODES, Container, DisplayObject, InteractionEvent } from "pixi.js";
import { Interactive } from "./interactive";
import { DRAGGABLE_RADIUS } from "./constants";
import bloomImage from '../assets/images/bloom-128x128.png';
import ClickTrack from "click-track";
import OnDemandEmitter from "./on-demand-emitter";

import note_1 from '../assets/images/instrument-icons/note_1.svg';
import note_2 from '../assets/images/instrument-icons/note_2.svg';
import note_3 from '../assets/images/instrument-icons/note_3.svg';
import { PathParticle } from "pixi-particles";
import PerformanceState from "./performance-state";

export enum DraggableState {
  HIDDEN,
  IDLE,
  SHRINK_OUT,
  SHRINK_IN
}

export class Draggable extends Interactive {
  protected graphics: DisplayObject = new Graphics();
  protected dragging = false;
  public origin: Point = new Point();
  protected state: DraggableState;
  protected lastPosition: Point = new Point();
  protected pointerPos: Point;
  protected velocity: [number, number];
  protected velocityMeasurements: Array<[number, number]> = [];
  protected lastBeat: number = 0;
  protected visualCuesClicktrack: ClickTrack;
  protected visualCuesEmitter: OnDemandEmitter;
  private bloomSprite: Sprite;

  constructor() {
    super();
    (this.graphics as Graphics)
      .clear()
      .beginFill(0xffffff, 1)
      .drawCircle(0, 0, DRAGGABLE_RADIUS)
      .endFill();
    this.addChild(this.graphics);

    this.bloomSprite = Sprite.from(bloomImage);
    this.bloomSprite.scale.set(0.7);
    this.bloomSprite.blendMode = BLEND_MODES.SOFT_LIGHT;
    this.bloomSprite.anchor.set(0.5, 0.5);
    this.setState(DraggableState.SHRINK_IN, 1.0);

    this.addChild(this.bloomSprite);

    this.graphics.interactive = true;
    this.graphics.cursor = "grab";
    this.graphics
      .on('pointerdown', this.onDragStart.bind(this))
      .on('pointerup', this.onDragEnd.bind(this))
      .on('pointerupoutside', this.onDragEnd.bind(this));
  }

  adopt(newParent: Container) {
    this.emit('adopted', this, newParent);
    this.setState(DraggableState.SHRINK_IN, 0);
    this.velocity = [0,0];
  }

  abandon() {
    if(this.parent) {
      this.parent.removeChild(this);
    }
    this.destroy();
  }

  setOrigin(x: number, y: number) {
    this.origin.x = x;
    this.origin.y = y;
    this.position.set(x, y);
  }

  onDragStart(e: InteractionEvent) {
    this.dragging = true;
    this.graphics.cursor = "grabbing";
    this.emit("dragActive", this, e);
    this.graphics.on('pointermove', this.onDragMove.bind(this));
    document.body.classList.add("dragging");
  }

  onDragEnd(e: InteractionEvent) {
    this.dragging = false;
    this.graphics.cursor = "auto";
    this.emit("dragInactive", this, e);
    this.graphics.off('pointermove', this.onDragMove.bind(this));
    this.emit("dragged", this, e);
    document.body.classList.remove("dragging");
  }

  onDragMove(e: InteractionEvent) {
    if (this.dragging) {
      const newPosition = e.data.getLocalPosition(this.parent);
      this.pointerPos = new Point();
      this.pointerPos.copyFrom(newPosition);
    }
  }

  onTick(beat: number, deltaBeat: number) {
    super.onTick(beat, deltaBeat);

    if(this._destroyed) return;

    if(this.visualCuesEmitter) {
      this.visualCuesEmitter.update(deltaBeat);
    }

    if(this.pointerPos && this.dragging) {
      this.lastPosition.copyFrom(this.position);
      this.position.copyFrom(this.pointerPos);
      const velMeasurement: [number, number] = [(this.position.x - this.lastPosition.x) / deltaBeat, (this.position.y - this.lastPosition.y) / deltaBeat];
      this.velocityMeasurements.push(velMeasurement);
      // keep measurements to 5
      if(this.velocityMeasurements.length > 10) {
        this.velocityMeasurements.shift();
      }
      // Calculate avg velocity from samples
      this.velocity = [0,0];
      for (let i = 0; i < this.velocityMeasurements.length; i++) {
        this.velocity[0] += this.velocityMeasurements[i][0];
        this.velocity[1] += this.velocityMeasurements[i][1];
      }
      this.velocity[0] = this.velocity[0] / this.velocityMeasurements.length;
      this.velocity[1] = this.velocity[1] / this.velocityMeasurements.length;
    }

    const ydiff = (this.position.y - this.origin.y);
    const perspectivescale = Math.pow(2, ydiff / 200);
    this.scale.set(perspectivescale, perspectivescale);

    if(this.state === DraggableState.SHRINK_OUT) {
      this.position.set(this.position.x + this.velocity[0] * deltaBeat / 2, this.position.y + this.velocity[1] * deltaBeat / 2);
      this.graphics.scale.set(1 - this.stateFade);
      this.alpha = 1 - this.stateFade;
      if(this.stateFade >= 1) {
        this.emit("destroy", this);
      }
    }

    if(this.state === DraggableState.SHRINK_IN) {
      this.graphics.scale.set(this.stateFade);
      this.alpha = this.stateFade;
      if(this.stateFade >= 1) {
        this.setState(DraggableState.IDLE, 1.0);
      }
    }
  }

  setIcon(icon: Sprite) {
    this.graphics.destroy();
    icon.anchor.set(0.5);
    this.graphics = icon;
    this.addChild(this.graphics);

    const scale = 1;
    this.graphics.scale.set(scale);
    this.bloomSprite.visible = false;
  }

  setVisualCues(cues: number[]) {
    if(this.visualCuesClicktrack) {
      throw new Error("Can't set the visual cues again");
    }

    this.visualCuesClicktrack = new ClickTrack({
      timerSource: PerformanceState.clickTrack.timer,
      offset: PerformanceState.clickTrack.offset,
      tempo: PerformanceState.clickTrack.tempo,
      cues: [...cues]
    });

    // This config is temp, need to move to setter
    this.visualCuesEmitter = new OnDemandEmitter(
      this,
      [
        note_1,
        note_2,
        note_3
      ], {
        "alpha": {
          "start": .8,
          "end": 0
        },
        "scale": {
          "start": 0.3,
          "end": 0.3,
          "minimumScaleMultiplier": 0.5
        },
        "color": {
          "start": "#ffffff",
          "end": "#000000"
        },
        "speed": {
          "start": 50,
          "end": 50,
          "minimumSpeedMultiplier": 1
        },
        "acceleration": {
          "x": 0,
          "y": 0
        },
        "maxSpeed": 0,
        "startRotation": {
          "min": 0,
          "max": 0
        },
        "noRotation": true,
        "rotationSpeed": {
          "min": 0,
          "max": 0
        },
        "lifetime": {
          "min": 6,
          "max": 6
        },
        "blendMode": "normal",
        "extraData": {
          "path":"sin(x/30)* 20 - x/3" // dust devil
        },
        "frequency": 0.01,
        "particlesPerWave": 1,
        "emitterLifetime": -1,
        "maxParticles": 15,
        "pos": {
          "x": 32,
          "y": -32
        },
        "addAtBack": false,
        "spawnType": "point"
      }
    );

    this.visualCuesEmitter.particleConstructor = PathParticle;
    let whichArtCounter = 1;

    this.visualCuesClicktrack.on("cue", (ct, e) => {
      this.visualCuesEmitter.spawn(1, e.drag, 0);
    });

    this.visualCuesClicktrack.once("lastCue", () => {
      this.visualCuesClicktrack.deconstruct();
      delete this.visualCuesClicktrack;
      this.setState(DraggableState.SHRINK_OUT, 0.1);
    });
  }

  multiplierResize(m: number) {}

  setState(newState: DraggableState, value: number) {
    if(newState === DraggableState.SHRINK_OUT) {
      this.stateFadeTime = value;
      this.stateFade = 1 - this.scale.x;
    }
    if(newState === DraggableState.SHRINK_IN) {
      this.stateFadeTime = 0.5;
      this.stateFade = 1 - this.scale.x;
    }
    this.state = newState;
  }

}
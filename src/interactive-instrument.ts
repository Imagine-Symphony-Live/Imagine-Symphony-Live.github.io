import { Graphics, Point, Filter, Sprite } from "pixi.js";
import { Interactive } from "./interactive";
import { Draggable, DraggableState } from "./draggable";
import { powLerpPoint } from "./lerp";
import { DRAGGABLE_RADIUS } from "./constants";

export enum InstrumentState {
  IDLE,
  CUE_READY,
  CUED,
  HIT,
  HIT_SUCCESS,
}

export class InteractiveInstrument extends Interactive {
  private bkgGraphics: Graphics = new Graphics();
  private indicatorPoint: Point = new Point();
  private indicatorStartPoint: Point = new Point();
  private draggables: Array<Draggable> = [];
  private mCenterPoint: Point = new Point();
  protected filter: Filter;

  public state: InstrumentState = InstrumentState.IDLE;
  public stateValue?: any = 0;
  private nextCueSprite?: Sprite;

  constructor(public color: number, private graphicsDraw: () => void) {
    super();

    this.draw();

    this.on("drop", this.onDrop.bind(this));

    this.interactive = true;
    this.on("mousedragover", this.onDragOver.bind(this));
    this.on("mousedragout", this.onDragOut.bind(this));

    this.filter = new Filter(undefined, `
      uniform bool isCue;
      uniform bool isCueReady;
      uniform bool isHover;
      uniform float maxXCoord;
      varying vec2 vTextureCoord;
      uniform sampler2D uSampler;
      void main() {
        vec4 originalColor = texture2D(uSampler, vTextureCoord);
        float colorScale = gl_FragCoord.x/maxXCoord;
        if(originalColor[3] > 0.0) {
          if (isCue) {
            gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0) * originalColor[3]  * colorScale;
          } else if(isHover && isCueReady) {
            gl_FragColor = originalColor  * colorScale;
          } else if(isCueReady) {
            gl_FragColor = vec4(0.0, 0.7, 1.0, 1.0) * originalColor[3]  * colorScale;
          } else {
            gl_FragColor = originalColor * 0.5  * colorScale;
          }
        }
      }
    `, {
      isCueReady: false,
      isCue: false,
      maxXCoord: window.innerHeight,
      isHover: false,
    });
    this.bkgGraphics.filters = [this.filter];

    this.addChild(this.bkgGraphics);
  }

  multiplierResize(multiplier: number) {
    this.filter.uniforms.maxXCoord = window.innerWidth;
    this.scale.set(multiplier,multiplier);

    const bkgBounds = this.bkgGraphics.getLocalBounds();
    this.mCenterPoint.set(bkgBounds.x + bkgBounds.width / 2, bkgBounds.y + bkgBounds.height / 2  - DRAGGABLE_RADIUS);
  }

  onDrop(dragging: Draggable, e: PIXI.interaction.InteractionEvent) {
    if(this.state === InstrumentState.CUE_READY && !this.draggables.length) {
      const draggingPos = dragging.getGlobalPosition();
      const thisGlobPosition = this.getGlobalPosition();
      const dragParentOffset = new Point((draggingPos.x - thisGlobPosition.x) / this.scale.x, (draggingPos.y - thisGlobPosition.y) / this.scale.y);
      const originOffset = new Point(dragging.position.x - dragging.origin.x, dragging.position.y - dragging.origin.y)
      dragging.adopt(this);
      this.draggables.push(dragging);
      dragging.on("destroy", () => {
        const f = this.draggables.findIndex((d) => d === dragging);
        this.draggables.splice(f, 1);
        dragging.abandon();
      });
      this.setState(InstrumentState.CUED);
      this.indicatorStartPoint.copyFrom(dragParentOffset);
      dragging.position.copyFrom(this.indicatorStartPoint);
      dragging.origin.x = dragging.position.x - originOffset.x;
      dragging.origin.y = dragging.position.y - originOffset.y;
    }
  }

  setState(newState: InstrumentState, value?: any) {
    if(newState === this.state) return;

    switch (newState) {
      case InstrumentState.CUED:
        this.stateFadeTime = 1.0;
        if(this.nextCueSprite && this.draggables.length) {
          this.draggables[0].setIcon(this.nextCueSprite);
        }
        break;

      case InstrumentState.CUE_READY:
        this.stateFadeTime = 1.0;
        if(typeof value === 'string') {
          this.nextCueSprite = Sprite.from(value);
        }
        break;

      case InstrumentState.HIT:
        this.stateFadeTime = 0.5;
        if(this.state === InstrumentState.CUED){
          newState = InstrumentState.HIT_SUCCESS;
          this.stateFadeTime = 0.1;
        }
        if(this.draggables.length) {
          if(value && typeof value === "object" && value.length) {
            this.draggables[0].setVisualCues(value);
          } else {
            this.draggables[0].setState(DraggableState.SHRINK_OUT, 0.5);
          }
        }
        break;

      default:
        this.stateFadeTime = 1;
    }
    this.stateFade = 0;
    this.state = newState;
    this.stateValue = value;
  }

  onTick(currentBeat: number, deltaBeat: number) {
    super.onTick(currentBeat, deltaBeat);

    this.draggables.forEach((d) => d.onTick(currentBeat, deltaBeat));

    if((this.state === InstrumentState.HIT || this.state === InstrumentState.HIT_SUCCESS) && this.stateFade >= 1) {
      this.setState(InstrumentState.IDLE);
    }
    if(this.state === InstrumentState.CUED) {
      if(this.stateFade < 1) {
        this.indicatorPoint.copyFrom(powLerpPoint(this.indicatorStartPoint, this.mCenterPoint, this.stateFade, 0.1));
      } else {
        this.indicatorPoint.copyFrom(this.mCenterPoint);
      }
      if(this.draggables[0]) {
        this.draggables[0].position.copyFrom(this.indicatorPoint);
      }
      //this.indicatorGraphics.position.set(this.mCenterPoint.x + this.indicatorPoint.x, this.mCenterPoint.y + this.indicatorPoint.y);
    } else if (this.state === InstrumentState.HIT_SUCCESS) {
      //
    } else {
      //
    }

    this.filter.uniforms.isCue = this.state === InstrumentState.CUED;
    this.filter.uniforms.isHover = this.dragHover;
    this.filter.uniforms.isCueReady = this.state === InstrumentState.CUE_READY;

  }


  draw() {

    this.bkgGraphics.clear().beginFill(this.color, 1);

    this.graphicsDraw.apply(this.bkgGraphics);

    this.bkgGraphics.endFill();


  }
}
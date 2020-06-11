import { Graphics, Point, Filter } from "pixi.js";
import { Interactive } from "./interactive";
import { Draggable } from "./draggable";
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
  public stateValue: number = 0;

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
      this.setState(InstrumentState.CUED);
      this.indicatorStartPoint.copyFrom(dragParentOffset);
      dragging.position.copyFrom(this.indicatorStartPoint);
      dragging.origin.x = dragging.position.x - originOffset.x;
      dragging.origin.y = dragging.position.y - originOffset.y;
    }
  }

  setState(newState: InstrumentState, value: number = 0) {
    // TEMP
    if(newState === this.state) return;

    switch (newState) {
      case InstrumentState.CUED:
      case InstrumentState.CUE_READY:
        this.stateFadeTime = 1.0;
        break;

      case InstrumentState.HIT:
        this.stateFadeTime = 0.5;
        if(this.state === InstrumentState.CUED){
          newState = InstrumentState.HIT_SUCCESS;
          this.stateFadeTime = 0.1;
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
      let d = this.draggables.pop()
      if(d) {
        this.removeChild(d);
        d.destroy();
      }
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
      // @TODO only fade if was cued
      if(this.draggables[0]) {
        this.draggables[0].alpha = 1.0 - this.stateFade;
      }
    } else {
      //this.indicatorGraphics.alpha = 0;
    }

    this.filter.uniforms.isCue = this.state === InstrumentState.CUED;
    this.filter.uniforms.isHover = this.dragHover;
    this.filter.uniforms.isCueReady = this.state === InstrumentState.CUE_READY;

  }


  draw() {

    // For some reason cacheing clips it incorrectly

    this.bkgGraphics.clear().beginFill(this.color, 1);

    this.graphicsDraw.apply(this.bkgGraphics);

    this.bkgGraphics.endFill();


  }
}
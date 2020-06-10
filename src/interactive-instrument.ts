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
  private indicatorGraphics: Graphics = new Graphics();
  private indicatorPoint: Point = new Point();
  private indicatorStartPoint: Point = new Point();
  private indicatorHomePoint: Point = new Point(0, -DRAGGABLE_RADIUS);
  private centerPoint: Point = new Point(); // @TODO
  private mCenterPoint: Point = new Point();
  protected filter: Filter;

  public state: InstrumentState = InstrumentState.IDLE;
  public stateValue: number = 0;

  constructor(public color: number, private graphicsDraw: () => void) {
    super();

    this.updateSize();

    this.on("drop", this.onDrop.bind(this));

    this.interactive = true;
    this.on("mousedragover", this.onDragOver.bind(this));
    this.on("mousedragout", this.onDragOut.bind(this));

    this.filter = new Filter(undefined, `
      uniform bool isCue;
      uniform bool isCueReady;
      uniform bool isHover;
      varying vec2 vTextureCoord;
      uniform sampler2D uSampler;
      void main() {
        vec4 originalColor = texture2D(uSampler, vTextureCoord);
        float colorScale = gl_FragCoord.x/500.0;
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
      isHover: false,
    });
    this.bkgGraphics.filters = [this.filter];

    this.addChild(this.bkgGraphics);
    this.addChild(this.indicatorGraphics);
  }

  multiplierResize(multiplier: number) {
    // @TODO - scale it
    this.updateSize();
  }

  updateSize() {
    // this.mCenterPoint =// @TODO

    this.draw();
  }

  onDrop(dragging: Draggable, e: PIXI.interaction.InteractionEvent) {
    if(this.state === InstrumentState.CUE_READY) {
      //dragging.parent.removeChild(dragging);
      this.setState(InstrumentState.CUED);
      const cursorPpoint = e.data.getLocalPosition(this);
      this.indicatorStartPoint.x = cursorPpoint.x - this.mCenterPoint.x;
      this.indicatorStartPoint.y = cursorPpoint.y - this.mCenterPoint.y;
    }
  }

  setState(newState: InstrumentState, value: number = 0) {
    // TEMP
    if(newState === this.state) return;

    switch (newState) {
      case InstrumentState.CUED:
      case InstrumentState.CUE_READY:
        this.stateFadeTime = 0.1;
        break;

      case InstrumentState.HIT:
        this.stateFadeTime = 0.2;
        if(this.state === InstrumentState.CUED){
          newState = InstrumentState.HIT_SUCCESS;
          this.stateFadeTime = 0.01;
        }
        break;

      default:
        this.stateFadeTime = 1;
    }
    this.stateFade = 0;
    this.state = newState;
    this.stateValue = value;
  }

  onTick(currentBeat: number) {
    super.onTick(currentBeat);

    if((this.state === InstrumentState.HIT || this.state === InstrumentState.HIT_SUCCESS) && this.stateFade >= 1) {
      this.setState(InstrumentState.IDLE);
    }
    if(this.state === InstrumentState.CUED) {
      this.indicatorGraphics.alpha = 1.0;
      if(this.stateFade < 1) {
        this.indicatorPoint.copyFrom(powLerpPoint(this.indicatorStartPoint, this.indicatorHomePoint, this.stateFade, 0.1));
      } else {
        this.indicatorPoint.copyFrom(this.indicatorHomePoint);
      }
      this.indicatorGraphics.position.set(this.mCenterPoint.x + this.indicatorPoint.x, this.mCenterPoint.y + this.indicatorPoint.y);
    } else if (this.state === InstrumentState.HIT_SUCCESS) {
      // @TODO only fade if was cued
      this.indicatorGraphics.alpha = 1.0 - this.stateFade / 2;
    } else {
      this.indicatorGraphics.alpha = 0;
    }

    this.filter.uniforms.isCue = this.state === InstrumentState.CUED;
    this.filter.uniforms.isHover = this.dragHover;
    this.filter.uniforms.isCueReady = this.state === InstrumentState.CUE_READY;

  }


  draw() {

    // For some reason cacheing clips it incorrectly
    //this.bkgGraphics.cacheAsBitmap = true;

    this.bkgGraphics.clear().beginFill(this.color, 1);

    this.graphicsDraw.apply(this.bkgGraphics);

    this.bkgGraphics.endFill();

    const bkgBounds = this.bkgGraphics.getLocalBounds();

    this.mCenterPoint.set(bkgBounds.x + bkgBounds.width / 2, bkgBounds.y + bkgBounds.height / 2);

    this.indicatorGraphics.cacheAsBitmap = true;
    this.indicatorGraphics
      .clear()
      .beginFill(0xffffff)
      .drawCircle(0, 0, DRAGGABLE_RADIUS)
      .endFill();

  }
}
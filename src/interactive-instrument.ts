import { Graphics, Point } from "pixi.js";
import { Interactive } from "./interactive";
import { Draggable } from "./draggable";
import { powLerpPoint } from "./lerp";
import { DRAGGABLE_RADIUS } from "./constants";

export enum InstrumentState {
  IDLE,
  CUE_READY,
  CUED,
  HIT,
}

export class InteractiveInstrument extends Interactive {
  private bkgGraphics: Graphics = new Graphics();
  private dynamicGraphics: Graphics = new Graphics();
  private indicatorGraphics: Graphics = new Graphics();
  private indicatorPoint: Point = new Point();
  private indicatorStartPoint: Point = new Point();
  private indicatorHomePoint: Point = new Point(0, -DRAGGABLE_RADIUS);
  private centerPoint: Point = new Point(); // @TODO
  private mCenterPoint: Point = new Point();

  public state: InstrumentState = InstrumentState.IDLE;
  public stateValue: number = 0;

  constructor(public color: number, private graphicsDraw: () => void) {
    super();

    this.updateSize();

    this.on("drop", this.onDrop.bind(this));

    this.interactive = true;
    this.on("mousedragover", this.onDragOver.bind(this));
    this.on("mousedragout", this.onDragOut.bind(this));

    this.addChild(this.bkgGraphics);
    this.addChild(this.dynamicGraphics);
    this.addChild(this.indicatorGraphics);
  }

  multiplierResize(multiplier: number) {
    // @TODO - scale it
    this.updateSize();
  }

  updateSize() {
    // this.mCenterPoint =// @TODO

    this.draw();
    this.drawDynamics();
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
        this.stateFadeTime = 0.05;
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

    if(this.state === InstrumentState.HIT && this.stateFade >= 1) {
      this.setState(InstrumentState.IDLE);
    }
    if(this.state === InstrumentState.CUED) {
      this.indicatorGraphics.alpha = 0.5;
      if(this.stateFade < 1) {
        this.indicatorPoint.copyFrom(powLerpPoint(this.indicatorStartPoint, this.indicatorHomePoint, this.stateFade, 0.1));
      } else {
        this.indicatorPoint.copyFrom(this.indicatorHomePoint);
      }
      this.indicatorGraphics.position.set(this.mCenterPoint.x + this.indicatorPoint.x, this.mCenterPoint.y + this.indicatorPoint.y);
    } else if (this.state === InstrumentState.HIT) {
      this.indicatorGraphics.alpha = 0.5 - this.stateFade / 2;
    } else {
      this.indicatorGraphics.alpha = 0;
    }

    if(this.dragHover ) {//&& this.state === InstrumentState.CUE_READY
      this.bkgGraphics.alpha = 1;
    } else {
      this.bkgGraphics.alpha = 0.5;
    }
    this.drawDynamics();
  }

  drawDynamics() {
    this.dynamicGraphics.clear()

    if(this.state === InstrumentState.CUE_READY || this.state === InstrumentState.CUED) {
      this.dynamicGraphics.position.y = 0;
      this.dynamicGraphics
        .lineStyle(2,0xffffff, 0.1 * this.stateFade)
        .drawEllipse(this.mCenterPoint.x, this.mCenterPoint.y, 32 , 32 * 0.5);
    }

    if(this.state === InstrumentState.CUED) {
      this.dynamicGraphics.lineStyle(2, 0xffffff, 1, 0);
      this.graphicsDraw.apply(this.dynamicGraphics);
    }

    if(this.state === InstrumentState.HIT) {
      this.dynamicGraphics.lineStyle(2, 0xffffff, (1-this.stateFade)*0.75, -2 - 4 * this.stateFade);
      this.graphicsDraw.apply(this.dynamicGraphics );
      this.dynamicGraphics.position.y = Math.sqrt(this.stateFade)*-20;
    }

  }

  draw() {

    // For some reason cacheing clips it incorrectly
    //this.bkgGraphics.cacheAsBitmap = true;

    this.bkgGraphics.clear().beginFill(this.color, 0.5);

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
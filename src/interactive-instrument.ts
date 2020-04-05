import { Graphics, Point, Matrix } from "pixi.js";
import { drawDoubleClosedArc } from "./draw-util";
import { Interactive } from "./interactive";
import { Draggable } from "./dragable";
import { linearLerpPoint, powLerpPoint } from "./lerp";

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
  private indicatorHomePoint: Point = new Point(0, -32);
  private maskGraphics: Graphics = new Graphics();
  private centerPoint: Point = new Point();
  private mCenterPoint: Point = new Point();
  private initialStartRad: number;
  private initialEndRad: number;
  private tMatrix = new Matrix(1, 0, 0, 0.5, 0, 0);

  public state: InstrumentState = InstrumentState.IDLE;
  public stateValue: number = 0;

  constructor(public color: number, public startArc: number, public endArc: number, public startRad: number, public endRad: number) {
    super();
    this.initialStartRad = startRad;
    this.initialEndRad = endRad;

    this.updateSize({
      startRad,
      endRad,
      startArc,
      endArc,
    });

    this.on("drop", this.onDrop.bind(this));

    //this.mask = this.maskGraphics;
    this.addChild(this.bkgGraphics);
    //this.addChild(this.maskGraphics);
    this.addChild(this.dynamicGraphics);
    this.addChild(this.indicatorGraphics);
  }

  multiplierResize(multiplier: number) {
    this.updateSize({
      startRad: this.initialStartRad*multiplier,
      endRad: this.initialEndRad*multiplier,
    });
  }

  updateSize(options: {
    startRad?: number,
    endRad?: number,
    startArc?: number,
    endArc?: number
  }) {
    if(options.startRad) this.startRad = options.startRad;
    if(options.endRad) this.endRad = options.endRad;
    if(options.startArc) this.startArc = options.startArc;
    if(options.endArc) this.endArc = options.endArc;
    const centerArc = this.startArc + (this.endArc - this.startArc) / 2;
    const centerRad = this.startRad + (this.endRad - this.startRad) / 2;
    this.centerPoint.set(Math.cos(centerArc) * centerRad, -Math.sin(centerArc) * centerRad);
    this.mCenterPoint = this.tMatrix.apply(this.centerPoint);

    this.updateMask();
    this.draw();
    this.drawDynamics();
  }

  onDrop(dragging: Draggable, e: PIXI.interaction.InteractionEvent) {
    if(this.state === InstrumentState.CUE_READY) {
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

    if(this.dragHover && this.state === InstrumentState.CUE_READY) {
      this.bkgGraphics.alpha = 1;
    } else {
      this.bkgGraphics.alpha = 0.5;
    }
    this.drawDynamics();
  }

  updateMask() {
    this.maskGraphics
      .clear()
      .setMatrix(this.tMatrix)
      // @TODO - why doesn't this mask as expected?
      .lineStyle(10, 0x000000, 1, 0)
      .beginFill(0xffffff, 1);

    drawDoubleClosedArc(this.maskGraphics, this.startArc, this.endArc, this.startRad, this.endRad, 100);

    this.maskGraphics.endFill();

  }

  drawDynamics() {
    this.dynamicGraphics.clear()
      .setMatrix(this.tMatrix);

    if(this.state === InstrumentState.CUE_READY || this.state === InstrumentState.CUED) {
      this.dynamicGraphics
        .lineStyle(2,0xffffff, 0.1 * this.stateFade)
        .drawCircle(this.centerPoint.x, this.centerPoint.y, 42 );
    }

    if(this.state === InstrumentState.CUED) {
      this.dynamicGraphics.lineStyle(2, 0xffffff, 1, 0);
      drawDoubleClosedArc(this.dynamicGraphics, this.startArc, this.endArc, this.startRad, this.endRad, 100, true);
    }

    if(this.state === InstrumentState.HIT) {
      this.dynamicGraphics.lineStyle(1, 0xffffff, (1-this.stateFade)*0.75, -5 + 40 * this.stateFade)
      drawDoubleClosedArc(this.dynamicGraphics, this.startArc, this.endArc, this.startRad, this.endRad, 100, true);

      this.dynamicGraphics.lineStyle(6, 0xffffff, (1-this.stateFade), 2 * this.stateFade)
      drawDoubleClosedArc(this.dynamicGraphics, this.startArc, this.endArc, this.startRad, this.endRad, 100, true);

      this.dynamicGraphics.lineStyle(1, 0xffffff, (1-this.stateFade), -5 + 20 * this.stateFade)
      drawDoubleClosedArc(this.dynamicGraphics, this.startArc, this.endArc, this.startRad, this.endRad, 100, true);

    }

  }

  draw() {

    this.bkgGraphics
      .clear()
      .setMatrix(this.tMatrix)
      //.lineStyle(10, 0x55aacc, 1, 0)
      .beginFill(this.color, 0.5);

    drawDoubleClosedArc(this.bkgGraphics, this.startArc, this.endArc, this.startRad, this.endRad, 100);

    this.bkgGraphics.endFill();

    this.indicatorGraphics
      .clear()
      .beginFill(0xffffff)
      .drawCircle(0, 0, 32)
      .endFill();

  }
}
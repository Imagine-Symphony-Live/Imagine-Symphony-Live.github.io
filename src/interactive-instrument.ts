import { Container, Graphics, Point } from "pixi.js";
import { drawFilledArc } from "./draw-util";

export class InteractiveInstrument extends Container {
  private bkgGraphics: Graphics = new Graphics();
  private dynamicGraphics: Graphics = new Graphics();
  private maskGraphics: Graphics = new Graphics();
  private centerPoint: Point = new Point();

  constructor(public startRad: number, public endRad: number, public startArc: number, public endArc: number, public color: number) {
    super();

    const centerArc = this.startArc + (this.endArc - this.startArc) / 2;
    const centerRad = this.startRad + (this.endRad - this.startRad) / 2;
    this.centerPoint.set(Math.cos(centerArc) * centerRad, -Math.sin(centerArc) * centerRad);

    this.mask = this.maskGraphics;
    this.updateMask();
    this.draw();
    this.drawDynamics();
    this.addChild(this.bkgGraphics);
    this.addChild(this.maskGraphics);
    this.addChild(this.dynamicGraphics);
  }

  updateMask() {
    this.maskGraphics
      .clear()
      // @TODO - why doesn't this mask as expected?
      .lineStyle(10, 0x000000, 1, 0)
      .beginFill(0xffffff, 1);

    drawFilledArc(this.maskGraphics, this.startArc, this.endArc, this.startRad, this.endRad, 100);

    this.maskGraphics.endFill();

  }

  drawDynamics() {
    this.dynamicGraphics
      .clear()
      .lineStyle(4, 0xffffff, 1, 0)
    // .drawCircle(this.centerPoint.x, this.centerPoint.y, 30)
    // .drawCircle(this.centerPoint.x, this.centerPoint.y, 50)
    // .drawCircle(this.centerPoint.x, this.centerPoint.y, 100)
    // .drawCircle(this.centerPoint.x, this.centerPoint.y, 150)
    //   .beginFill(this.color, 0.5);

    // // Draw center line
    // const halfRad = (this.endRad - this.startRad) / 2 + this.startRad;
    // const arcPadding = 80 / (Math.PI * halfRad);

    // this.bkgGraphics
    //   .lineStyle(1, this.color, 1, 0);

    // drawFilledArc(this.bkgGraphics, this.startArc + arcPadding, this.endArc - arcPadding, halfRad - 10, halfRad + 10, 100);

  }

  draw() {

    this.bkgGraphics
      .clear()
      //.lineStyle(10, 0x55aacc, 1, 0)
      .beginFill(this.color, 0.5);

    drawFilledArc(this.bkgGraphics, this.startArc, this.endArc, this.startRad, this.endRad, 100);

    this.bkgGraphics.endFill();

  }
}
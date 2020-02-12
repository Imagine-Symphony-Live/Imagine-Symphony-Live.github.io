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

  onDrop(e: PIXI.interaction.InteractionEvent) {
    const pos = this.getGlobalPosition();
    const distance = Math.sqrt(Math.pow(pos.x - e.data.global.x + this.centerPoint.x, 2) + Math.pow(pos.y - e.data.global.y + this.centerPoint.y, 2));
    if(distance > 64) {
      return;
    }
  }

  onTick() {
    this.drawDynamics();
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
      .drawCircle(this.centerPoint.x, this.centerPoint.y, 48 )
    // .drawCircle(this.centerPoint.x, this.centerPoint.y, 50)
    // .drawCircle(this.centerPoint.x, this.centerPoint.y, 100)
    // .drawCircle(this.centerPoint.x, this.centerPoint.y, 150)
    //   .beginFill(this.color, 0.5);

    // // Draw center line
    // const halfRad = (this.endRad - this.startRad) / 2 + this.startRad;
    // const arcPadding = (Math.sin(this.iTemp / 10) * (100) + 150 ) / (Math.PI * halfRad);

    // this.dynamicGraphics
    //   .lineStyle(3, this.color, 1, 0);

    // drawFilledArc(this.dynamicGraphics, this.startArc + arcPadding, this.endArc - arcPadding, halfRad - (Math.sin(this.iTemp / 10) * (10) + 15 ), halfRad + (Math.sin(this.iTemp / 10) * (10) + 15 ), 10);

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
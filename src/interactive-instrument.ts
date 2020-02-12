import { Container, Graphics } from "pixi.js";
import { drawFilledArc } from "./draw-util";

export class InteractiveInstrument extends Container {
  private graphics: Graphics = new Graphics();

  constructor(public startRad: number, public endRad: number, public startArc: number, public endArc: number, public color: number) {
    super();

    this.draw();
    this.addChild(this.graphics);
  }

  draw() {

    this.graphics
      .clear()
      .lineStyle(10, 0x55aacc, 1, 0)
      .beginFill(this.color, 0.5);

    drawFilledArc(this.graphics, this.startArc, this.endArc, this.startRad, this.endRad, 100);

    this.graphics.endFill();

    // Draw center line
    const halfRad = (this.endRad - this.startRad) / 2 + this.startRad;
    const arcPadding = 80 / (Math.PI * halfRad);

    this.graphics
      .lineStyle(1, this.color, 1, 0);

    drawFilledArc(this.graphics, this.startArc + arcPadding, this.endArc - arcPadding, halfRad - 10, halfRad + 10, 100);

  }
}
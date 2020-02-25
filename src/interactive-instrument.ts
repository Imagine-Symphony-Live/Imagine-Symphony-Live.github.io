import { Graphics, Point } from "pixi.js";
import { drawFilledArc } from "./draw-util";
import { Interactive } from "./interactive";

export class InteractiveInstrument extends Interactive {
  private bkgGraphics: Graphics = new Graphics();
  private dynamicGraphics: Graphics = new Graphics();
  private maskGraphics: Graphics = new Graphics();
  private centerPoint: Point = new Point();
  private initialStartRad: number;
  private initialEndRad: number;
  private rTemp = 0;

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

    this.mask = this.maskGraphics;
    this.addChild(this.bkgGraphics);
    this.addChild(this.maskGraphics);
    this.addChild(this.dynamicGraphics);
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
    this.updateMask();
    this.draw();
    this.drawDynamics();
  }

  onDrop(e: PIXI.interaction.InteractionEvent) {
    const pos = this.getGlobalPosition();
    const distance = Math.sqrt(Math.pow(pos.x - e.data.global.x + this.centerPoint.x, 2) + Math.pow(pos.y - e.data.global.y + this.centerPoint.y, 2));
    if(distance > 64) {
      return;
    }
    this.rTemp = 1;
  }

  onTick() {
    if(this.rTemp > 0) {
      this.rTemp -= 0.05;
    } else {
      this.rTemp = 0;
    }
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
      .lineStyle(4, 0xffffff, 0.5, 0);

    this.dynamicGraphics.drawCircle(this.centerPoint.x, this.centerPoint.y, 48 );

    if(this.rTemp > 0) {
      this.dynamicGraphics
        .lineStyle(4, 0xffffff, this.rTemp*0.5)
        .drawCircle(this.centerPoint.x, this.centerPoint.y, 48 + (1 - this.rTemp) * 32 )
        .lineStyle(1, 0xffffff, this.rTemp)
        .drawCircle(this.centerPoint.x, this.centerPoint.y, 48 + (1 - this.rTemp) * 64 );
      this.dynamicGraphics.beginFill(0xffffff, 0.5 * this.rTemp)
        .lineStyle(0)
        .drawCircle(this.centerPoint.x, this.centerPoint.y, 32)
        .endFill();
    }

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
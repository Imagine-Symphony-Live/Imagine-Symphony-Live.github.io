import { Graphics, Container } from "pixi.js";

const ARROW_THICK = 5;
const ARROW_HEAD = 20;
const ARROW_ANGLE = 1.2 * Math.PI / 4;
const PAD_LENGTH = 0;

export default class ArrowGraphic extends Container {
  protected graphics = new Graphics();
  private needsDraw = true;
  private slidePos = 0;
  private slidei = 0;
  constructor(public fromPoint: [number, number], private _toPoint: [number, number]) {
    super();
    this.draw();
    this.addChild(this.graphics);
  }

  set toPoint([x, y] : [number, number]) {
    this._toPoint = [x, y];
    this.needsDraw = true;
  }

  tick(delta: number) {
    this.slidei += delta / 2;
    this.slidei = this.slidei % (Math.PI * 2);
    this.slidePos = Math.cos(this.slidei) * 10;

    //if(this.needsDraw) {
      this.draw();
    //}
  }

  draw() {
    this.needsDraw = false;
    const angle = Math.atan2(this._toPoint[0] - this.fromPoint[0], this._toPoint[1] - this.fromPoint[1]) + Math.PI/2;
    const arrowP1 = Math.sin(angle - Math.PI - ARROW_ANGLE);
    const arrowP2 = Math.cos(angle - Math.PI - ARROW_ANGLE);
    const arrowP3 = Math.sin(angle + ARROW_ANGLE);
    const arrowP4 = Math.cos(angle + ARROW_ANGLE);

    const arrowHeadLength = Math.cos(ARROW_ANGLE) * ARROW_HEAD;
    const toPointOffset = PAD_LENGTH - this.slidePos;
    const fromPointOffset = PAD_LENGTH + this.slidePos;

    this.graphics.clear()
      .lineStyle(ARROW_THICK, 0xffffff, 1)
      .moveTo(this.fromPoint[0] - Math.cos(-angle) * fromPointOffset, this.fromPoint[1] - Math.sin(-angle) * fromPointOffset)
      .lineTo(this._toPoint[0] + Math.cos(-angle) * (toPointOffset + arrowHeadLength), this._toPoint[1] + Math.sin(-angle) * (toPointOffset + arrowHeadLength))
      .lineStyle(1, 0xffffff, 1)
      .beginFill(0xffffff)
      .drawPolygon([
        this._toPoint[0] + Math.cos(-angle) * toPointOffset,
        this._toPoint[1] + Math.sin(-angle) * toPointOffset,
        this._toPoint[0] + Math.cos(-angle) * toPointOffset + arrowP1 * ARROW_HEAD,
        this._toPoint[1] + Math.sin(-angle) * toPointOffset + arrowP2 * ARROW_HEAD,
        this._toPoint[0] + Math.cos(-angle) * toPointOffset + arrowP3 * ARROW_HEAD,
        this._toPoint[1] + Math.sin(-angle) * toPointOffset + arrowP4 * ARROW_HEAD,
      ])
  }
}
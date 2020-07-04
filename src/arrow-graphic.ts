import { Graphics, Container } from "pixi.js";

const ARROW_THICK = 5;
const ARROW_HEAD = 20;
const ARROW_ANGLE = 1.2 * Math.PI / 4;
const PAD_LENGTH = 0;
const ARROW_HEAD_LENGTH = Math.cos(ARROW_ANGLE) * ARROW_HEAD;

export default class ArrowGraphic extends Container {
  protected graphics = new Graphics();
  private needsDraw = true;
  private slidei = 0;
  private _angle: number;
  private arrowP1: number;
  private arrowP2: number;
  private arrowP3: number;
  private arrowP4: number;

  constructor(public fromPoint: [number, number], private _toPoint: [number, number]) {
    super();
    this.draw();
    this.addChild(this.graphics);
    this.toPoint = _toPoint;
  }

  set toPoint([x, y] : [number, number]) {
    this._toPoint = [x, y];
    this.needsDraw = true;

    this._angle = Math.atan2(this._toPoint[0] - this.fromPoint[0], this._toPoint[1] - this.fromPoint[1]) + Math.PI/2;
    this.arrowP1 = Math.sin(this._angle - Math.PI - ARROW_ANGLE);
    this.arrowP2 = Math.cos(this._angle - Math.PI - ARROW_ANGLE);
    this.arrowP3 = Math.sin(this._angle + ARROW_ANGLE);
    this.arrowP4 = Math.cos(this._angle + ARROW_ANGLE);
  }

  tick(delta: number) {
    this.slidei += delta / 2;
    this.slidei = this.slidei % (Math.PI * 2);
    const slidePos = Math.cos(this.slidei) * 10;

    this.graphics.position.set(Math.cos(this._angle) * slidePos, - Math.sin(this._angle) * slidePos);

    if(this.needsDraw) {
      this.draw();
    }
  }

  draw() {
    this.needsDraw = false;

      this.graphics.clear()
      .lineStyle(ARROW_THICK, 0xffffff, 1)
      .moveTo(this.fromPoint[0] - Math.cos(-this._angle) * PAD_LENGTH, this.fromPoint[1] - Math.sin(-this._angle) * PAD_LENGTH)
      .lineTo(this._toPoint[0] + Math.cos(-this._angle) * (PAD_LENGTH + ARROW_HEAD_LENGTH + ARROW_THICK), this._toPoint[1] + Math.sin(-this._angle) * (PAD_LENGTH + ARROW_HEAD_LENGTH + ARROW_THICK))
      .lineStyle(1, 0xffffff, 1)
      .beginFill(0xffffff)
      .drawPolygon([
        this._toPoint[0] + Math.cos(-this._angle) * PAD_LENGTH,
        this._toPoint[1] + Math.sin(-this._angle) * PAD_LENGTH,
        this._toPoint[0] + Math.cos(-this._angle) * PAD_LENGTH + this.arrowP1 * ARROW_HEAD,
        this._toPoint[1] + Math.sin(-this._angle) * PAD_LENGTH + this.arrowP2 * ARROW_HEAD,
        this._toPoint[0] + Math.cos(-this._angle) * PAD_LENGTH + this.arrowP3 * ARROW_HEAD,
        this._toPoint[1] + Math.sin(-this._angle) * PAD_LENGTH + this.arrowP4 * ARROW_HEAD,
      ])
  }
}
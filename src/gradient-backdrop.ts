import { Graphics, Filter } from "pixi.js";
import { COLOR_BOOKSTORE_A, COLOR_BOOKSTORE_B, COLOR_BUS_A, COLOR_BUS_B, COLOR_DESERT_A, COLOR_DESERT_B, COLOR_FOREST_A, COLOR_FOREST_B, COLOR_LAKE_A, COLOR_LAKE_B, COLOR_MOUNTAIN_A, COLOR_MOUNTAIN_B, COLOR_RECAP_A, COLOR_RECAP_B, COLOR_HALL_A, COLOR_HALL_B } from "./colors";

export default class GradientBackdrop extends Graphics {
  private needDraw: boolean = true;
  private _fromColorA: [number,number,number] = [0,0,0];
  private _fromColorB: [number,number,number] = [0,0,0];
  private _colorA: [number,number,number] = [0,0,0];
  private _colorB: [number,number,number] = [0,0,0];
  private _colorATimer: number = 0;
  private _colorBTimer: number = 0;

  protected maxHeight: number = 256;
  public transitionSpeed = 50;

  constructor() {
    super();
    this.draw();

    this.filters = [
      new Filter(undefined, `
        uniform float maxXCoord;
        uniform float startXCoord;
        uniform float maxYCoord;
        uniform float startYCoord;
        uniform float edgeFallOff;
        uniform vec3 colorA;
        uniform vec3 colorB;
        void main() {
          float fallOffLeft = max(0.0, min(1.0, (gl_FragCoord.x - startXCoord) / edgeFallOff));
          float fallOffRight = max(0.0, min(1.0, (maxXCoord - gl_FragCoord.x) / edgeFallOff));
          float fallOffBottom = 1.0; // No need
          float fallOffTop = max(0.0, min(1.0, (gl_FragCoord.y - startYCoord) / edgeFallOff));
          float fallOff = min(min(min(fallOffLeft, fallOffRight), fallOffBottom), fallOffTop);

          float colorScale = ((gl_FragCoord.y - startYCoord)/(maxYCoord - startYCoord));
          gl_FragColor.rgb = mix(colorA, colorB, min(1.0,max(0.0, colorScale))) * fallOff;
        }
      `, {
        colorA: this._colorA,
        colorB: this._colorB,
        edgeFallOff: 5.0 * window.devicePixelRatio,
        startYCoord: 0,
        maxYCoord: window.innerHeight,
        maxXCoord: window.innerWidth,
        startXCoord: 0,
      })
    ];
  }

  set biomeTheme(theme: string) {
    switch (theme) {
      case "bookstore":
        this.colorA = COLOR_BOOKSTORE_A;
        this.colorB = COLOR_BOOKSTORE_B;
        break;

      case "bus":
        this.colorA = COLOR_BUS_A;
        this.colorB = COLOR_BUS_B;
        break;

      case "desert":
        this.colorA = COLOR_DESERT_A;
        this.colorB = COLOR_DESERT_B;
        break;

      case "forest":
        this.colorA = COLOR_FOREST_A;
        this.colorB = COLOR_FOREST_B;
        break;

      case "lake":
        this.colorA = COLOR_LAKE_A;
        this.colorB = COLOR_LAKE_B;
        break;

      case "mountain":
        this.colorA = COLOR_MOUNTAIN_A;
        this.colorB = COLOR_MOUNTAIN_B;
        break;

      case "recap":
        this.colorA = COLOR_RECAP_A;
        this.colorB = COLOR_RECAP_B;
        break;

      case "hall":
      default:
        this.colorA = COLOR_HALL_A;
        this.colorB = COLOR_HALL_B;
        break;
    }
  }

  set colorA(color: [number, number, number]) {
    this._colorA = color;
    this._fromColorA = <[number, number, number]>[...this.filters[0].uniforms.colorA];
    this._colorATimer = this.transitionSpeed;
  }

  set colorB(color: [number, number, number]) {
    this._colorB = color;
    this._fromColorB = <[number, number, number]>[...this.filters[0].uniforms.colorB];
    this._colorBTimer = this.transitionSpeed;
  }

  onTick(deltaMs: number) {
    if(this._colorATimer > 0) {
      this._colorATimer -= deltaMs;
      if(this._colorATimer < 0) this._colorATimer = 0;
      const l = 1 - Math.min(1, Math.max( 0, this._colorATimer / this.transitionSpeed ));
      const lerpColor = this._fromColorA.map((c,i) => c + (this._colorA[i] - c) * l);
      this.filters[0].uniforms.colorA = lerpColor;
    }
    if(this._colorBTimer > 0) {
      this._colorBTimer -= deltaMs;
      if(this._colorBTimer < 0) this._colorBTimer = 0;
      const l = 1 - Math.min(1, Math.max( 0, this._colorBTimer / this.transitionSpeed ));
      const lerpColor = this._fromColorB.map((c,i) => c + (this._colorB[i] - c) * l);
      this.filters[0].uniforms.colorB = lerpColor;
    }
    if(this.needDraw) {
      this.draw();
    }
  }

  multiplierResize(multiplier: number) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.scale.set(window.innerWidth - 2, h / this.maxHeight);
    this.position.set(0, 0);

    const bounds = this.getBounds();

    this.filters[0].uniforms.startYCoord = 0;
    this.filters[0].uniforms.maxYCoord = (bounds.height - 300 * multiplier) * window.devicePixelRatio;

    this.filters[0].uniforms.startXCoord = 0;//bounds.x * window.devicePixelRatio;
    this.filters[0].uniforms.maxXCoord = window.innerWidth * window.devicePixelRatio; //(bounds.x + bounds.width) * window.devicePixelRatio;
    this.filters[0].uniforms.edgeFallOff = multiplier * 5 * window.devicePixelRatio;
  }

  draw() {
    this.clear()
      .beginFill(0xffffff)
      .drawRect(0, 0, 1, 256)
      .endFill();

    this.needDraw = false;
  }
}
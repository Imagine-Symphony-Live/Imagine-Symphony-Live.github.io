import { Graphics, Filter } from "pixi.js";

export default class GradientBackdrop extends Graphics {
  private needDraw: boolean = true;
  private _colorA: [number,number,number] = [0,0,0];
  private _colorB: [number,number,number] = [0.5,0,0.2];
  protected maxWidth: number = 256;

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
          if(gl_FragCoord.x >= maxXCoord - 2.0 || gl_FragCoord.x <= startXCoord + 2.0 || gl_FragCoord.y <= startYCoord || gl_FragCoord.y >= maxYCoord) {
            gl_FragColor.rgb = vec3(0);
          } else {
            float fallOffLeft = max(0.0, min(1.0, (gl_FragCoord.x - startXCoord) / edgeFallOff));
            float fallOffRight = max(0.0, min(1.0, (maxXCoord - gl_FragCoord.x) / edgeFallOff));
            float fallOffBottom = max(0.0, min(1.0, (maxYCoord - gl_FragCoord.y) / edgeFallOff));
            float fallOffTop = max(0.0, min(1.0, (gl_FragCoord.y - startYCoord) / edgeFallOff));
            float fallOff = min(min(min(fallOffLeft, fallOffRight), fallOffBottom), fallOffTop);
            float colorScale = ((gl_FragCoord.y - startYCoord)/(maxYCoord - startYCoord));
            gl_FragColor.rgb = mix(colorA, colorB, colorScale) * fallOff;
          }
        }
      `, {
        colorA: this._colorA,
        colorB: this._colorB,
        edgeFallOff: 100.0,
        startYCoord: 0,
        maxYCoord: window.innerHeight,
        maxXCoord: window.innerWidth,
        startXCoord: 0,
      })
    ];
  }

  set colorA(color: [number, number, number]) {
    this._colorA = color;
    this.filters[0].uniforms.colorA = color;
  }

  set colorB(color: [number, number, number]) {
    this._colorB = color;
    this.filters[0].uniforms.colorB = color;
  }

  onTick(deltaMs) {
    if(this.needDraw) {
      this.draw();
    }
  }

  multiplierResize(multiplier: number) {
    const w = window.innerWidth; // 250 is magic number form performance-state
    this.scale.set(w / this.maxWidth, window.innerHeight - 2);
    this.position.set((window.innerWidth - w)/2, 0);

    const bounds = this.getBounds();

    this.filters[0].uniforms.startYCoord = 0;
    this.filters[0].uniforms.maxYCoord = bounds.height * window.devicePixelRatio;

    this.filters[0].uniforms.startXCoord = 0;//bounds.x * window.devicePixelRatio;
    this.filters[0].uniforms.maxXCoord = window.innerWidth * window.devicePixelRatio; //(bounds.x + bounds.width) * window.devicePixelRatio;
    this.filters[0].uniforms.edgeFallOff = multiplier * 10 / window.devicePixelRatio;
  }

  draw() {
    this.clear()
      .beginFill(0xffffff)
      .drawRect(0, 0, 256, 1)
      .endFill();

    this.needDraw = false;
  }
}
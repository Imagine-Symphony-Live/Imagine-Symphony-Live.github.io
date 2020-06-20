import { VideoPlayer } from "./video-player";
import { Graphics } from "pixi.js";

const STAGE_WIDTH = 787;
const LETTERBOX_HEIGHT = 71;
const QUAD_CURVE_OFFSET = 175;
export class PerformanceVideoPlayer extends VideoPlayer {
  maskGraphic: Graphics = new Graphics();
  constructor(public videoUrl: string, public width: number = STAGE_WIDTH, public accentColor: number = 0xffffff) {
    super(videoUrl, width, accentColor);
  }

  async preload() {
    await super.preload();
    const w = this.width;
    const h = this.height;
    this.addChild(this.maskGraphic);
    this.mask = this.maskGraphic;
    this.maskGraphic.position.set(0,0);
    this.maskGraphic.beginFill(0xffffff, 1);
    this.maskGraphic.moveTo(0,LETTERBOX_HEIGHT);
    this.maskGraphic.lineTo(w,LETTERBOX_HEIGHT);
    this.maskGraphic.lineTo(w,h - LETTERBOX_HEIGHT);
    // Rounded bottom
    this.maskGraphic.bezierCurveTo(w*0.66, h - QUAD_CURVE_OFFSET, w*0.33, h - QUAD_CURVE_OFFSET, 0, h - LETTERBOX_HEIGHT)
    this.maskGraphic.lineTo(0,LETTERBOX_HEIGHT);
    this.maskGraphic.closePath();
    this.maskGraphic.endFill();
  }

  multiplierResize(multiplier: number) {
    this.scale.set(multiplier);
    this.position.y = -LETTERBOX_HEIGHT * multiplier;
    this.position.x = (window.innerWidth - this.width) / 2;
  }

}
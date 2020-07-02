import { VideoPlayer } from "./video-player";
import { Graphics, Sprite, Loader } from "pixi.js";
import videoMask from '../assets/images/video-mask.png';
import videoBkg from '../assets/images/video-bkg.png';

const STAGE_WIDTH = 787;
const LETTERBOX_HEIGHT = 71;
const QUAD_CURVE_OFFSET = 175;
export class PerformanceVideoPlayer extends VideoPlayer {

  constructor(public videoUrl: string, public width: number = STAGE_WIDTH, public accentColor: number = 0xffffff) {
    super(videoUrl, width, accentColor);
  }

  async preload() {
    await super.preload();
    const w = this.videoSprite.width;
    const h = this.videoSprite.height;

    await new Promise((resolve) => {
      Loader.shared.add(videoMask).load(resolve);
    });
    await new Promise((resolve) => {
      Loader.shared.add(videoBkg).load(resolve);
    });

    const bkgSprite = Sprite.from(videoBkg);
    bkgSprite.scale.set(w / (bkgSprite.width));
    bkgSprite.position.set(0, LETTERBOX_HEIGHT - 1);
    this.addChild(bkgSprite);

    const maskSprite = Sprite.from(videoMask);
    maskSprite.scale.set(w / (maskSprite.width));
    this.addChild(maskSprite);
    maskSprite.position.set(0,LETTERBOX_HEIGHT);
    this.videoSprite.mask = maskSprite;

    this.addChild(this.videoSprite);
    this.addChild(this.overlayGraphics);

  }

  multiplierResize(multiplier: number) {
    this.scale.set(multiplier);
    this.position.y = -LETTERBOX_HEIGHT * multiplier;
    this.position.x = (window.innerWidth - this.width) / 2;
  }

}
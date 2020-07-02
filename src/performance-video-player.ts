import { VideoPlayer } from "./video-player";
import { Graphics, Sprite, Loader, Container } from "pixi.js";
import videoMask from '../assets/images/video-mask.png';
import videoBkg from '../assets/images/video-bkg.png';

const STAGE_WIDTH = 787;
const LETTERBOX_HEIGHT = 71;
const QUAD_CURVE_OFFSET = 175;
export class PerformanceVideoPlayer extends VideoPlayer {
  protected bkgCurtainPad = new Graphics();
  protected container = new Container();
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

    this.addChild(this.bkgCurtainPad);
    this.addChild(this.container);

    const bkgSprite = Sprite.from(videoBkg);
    bkgSprite.scale.set(w / (bkgSprite.width));
    bkgSprite.position.set(0, LETTERBOX_HEIGHT - 1);
    this.container.addChild(bkgSprite);

    const maskSprite = Sprite.from(videoMask);
    maskSprite.scale.set(w / (maskSprite.width));
    this.container.addChild(maskSprite);
    maskSprite.position.set(0,LETTERBOX_HEIGHT);
    this.videoSprite.mask = maskSprite;

    this.removeChild(this.videoSprite);
    this.removeChild(this.overlayGraphics);
    this.container.addChild(this.videoSprite);
    this.container.addChild(this.overlayGraphics);

  }

  multiplierResize(multiplier: number) {
    if(!this.videoSprite) return;
    this.container.scale.set(multiplier);
    this.container.position.y = -LETTERBOX_HEIGHT * multiplier;
    this.container.position.x = (window.innerWidth - this.container.width) / 2;

    this.bkgCurtainPad.position.set(0, 0)
    this.bkgCurtainPad.clear()
      .beginFill(0x000000)
      .drawRect(0, 0, this.container.position.x, this.container.height - 1)
      .drawRect(this.container.width + this.container.position.x, 0, (window.innerWidth - this.container.width) / 2, this.container.height - 1)
      .endFill();

  }

}
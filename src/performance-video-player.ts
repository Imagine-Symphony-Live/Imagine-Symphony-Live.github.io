import { VideoPlayer } from "./video-player";
import { Graphics, Sprite, Loader, Container, Text, SCALE_MODES } from "pixi.js";
import videoMask from '../assets/images/video-mask.png';
import videoMaskFlat from '../assets/images/video-mask-flat.png';
import videoBkg from '../assets/images/video-bkg.png';
import { TEXT_STYLE_CENSORED } from "./styles";

const STAGE_WIDTH = 787;
const LETTERBOX_HEIGHT = 71;
const QUAD_CURVE_OFFSET = 175;
export class PerformanceVideoPlayer extends VideoPlayer {
  protected bkgCurtainPad = new Graphics();
  protected container = new Container();
  private flatMask: Sprite;
  private theaterMask: Sprite;
  private flatMaskBacker: Graphics;
  protected playButtonSizeRatio: number = 0.05;
  protected autoplay = false;
  public canInteract = false;
  constructor(public videoUrl: string, public width: number = STAGE_WIDTH, public accentColor: number = 0xffffff) {
    super(videoUrl, width, accentColor);
  }

  async preload() {
    await super.preload();
    const w = this.videoSprite.width;
    const h = this.videoSprite.height;

    await new Promise((resolve) => {
      if(Loader.shared.resources[videoMask]) return resolve();
      Loader.shared.add(videoMask).load(resolve);
    });
    await new Promise((resolve) => {
      if(Loader.shared.resources[videoMaskFlat]) return resolve();
      Loader.shared.add(videoMaskFlat).load(resolve);
    });
    await new Promise((resolve) => {
      if(Loader.shared.resources[videoBkg]) return resolve();
      Loader.shared.add(videoBkg).load(resolve);
    });

    const bkgSprite = Sprite.from(videoBkg);
    bkgSprite.scale.set(w / (bkgSprite.width));
    bkgSprite.position.set(0, LETTERBOX_HEIGHT - 1);
    this.container.addChild(bkgSprite);

    this.flatMask = Sprite.from(videoMaskFlat);
    this.flatMask.scale.set(w / (this.flatMask.width));
    this.flatMask.position.set(0,LETTERBOX_HEIGHT);

    this.theaterMask = Sprite.from(videoMask);
    this.theaterMask.scale.set(w / (this.theaterMask.width));
    this.theaterMask.position.set(0,LETTERBOX_HEIGHT);

    this.flatMaskBacker = new Graphics();
    this.flatMaskBacker.clear()
      .beginFill(0x000000)
      .drawRect(0,0,this.flatMask.width, this.flatMask.height);
    this.container.addChild(this.flatMaskBacker);
    this.flatMaskBacker.position.set(0,LETTERBOX_HEIGHT)

    this.addChild(this.bkgCurtainPad);
    this.addChild(this.container);

    this.theaterMode = false;

    this.removeChild(this.videoSprite);
    this.removeChild(this.overlayGraphics);
    this.container.addChild(this.videoSprite);
    this.container.addChild(this.overlayGraphics);

    const censoredText = new Text("[CENSORED]", TEXT_STYLE_CENSORED);
    censoredText.scale.set(16);
    censoredText.texture.baseTexture.scaleMode = SCALE_MODES.NEAREST;
    censoredText.anchor.set(0.5);
    this.container.addChild(censoredText);
    censoredText.position.set(w/2, h/2);

  }

  set theaterMode(on: boolean) {
    if(on) {
      this.container.removeChild(this.flatMask);
      this.container.addChild(this.theaterMask);
      this.videoSprite.mask = this.theaterMask;
      this.flatMaskBacker.visible = false;
    } else {
      this.container.removeChild(this.theaterMask);
      this.container.addChild(this.flatMask);
      this.videoSprite.mask = this.flatMask;
      this.flatMaskBacker.visible = true;
    }
  }

  multiplierResize(multiplier: number) {
    if(!this.videoSprite) return;
    this.container.scale.set(multiplier);
    this.container.position.y = (-LETTERBOX_HEIGHT) * multiplier;
    this.container.position.x = (window.innerWidth - this.container.width) / 2;

    this.bkgCurtainPad.position.set(0, 0)
    this.bkgCurtainPad.clear()
      .beginFill(0x000000)
      .drawRect(-(window.innerWidth - this.container.width) / 2, -this.position.y, window.innerWidth, this.position.y)
      .drawRect(0, this.container.position.y, this.container.position.x, this.container.height - 1 + LETTERBOX_HEIGHT * multiplier)
      .drawRect(this.container.width + this.container.position.x, this.container.position.y, (window.innerWidth - this.container.width) / 2, this.container.height - 1 + LETTERBOX_HEIGHT * multiplier)
      .endFill();

  }

}
import { Container, Loader, Texture, Sprite, Graphics, Text, Point } from "pixi.js";
import { TEXT_STYLE_BIO_P } from "./styles";

export class VideoPlayer extends Container {
  isLoaded: boolean = false;
  protected videoSprite: Sprite;
  public nativeWidth: number;
  public nativeHeight: number;
  public nativeRatio: number;
  protected videoData: HTMLVideoElement;
  protected overlayGraphics: Graphics;
  protected statusText: Text;

  constructor(public videoUrl: string, public playerWidth: number = 256) {
    super();

    this.overlayGraphics = new Graphics();
    this.overlayGraphics.beginFill(0xeeeeee);
    const r = 32;
    const c = Math.cos(Math.PI * 2/3);
    const s = Math.sin(Math.PI * 2/3);
    this.overlayGraphics.drawPolygon([
      new Point(c * r, -s * r),
      new Point(r, 0),
      new Point(c * r, s * r),
    ])
    this.overlayGraphics.endFill();
    this.overlayGraphics.position.set(this.playerWidth / 2, 0);

    this.addChild(this.overlayGraphics);

    this.statusText = new Text('Unloaded', TEXT_STYLE_BIO_P);
    this.addChild(this.statusText);
    this.statusText.anchor.set(0,0);
    this.statusText.position.set(0, 0);

    this.interactive = true;
    this.on('pointerdown', this.interact.bind(this));
  }

  interact() {
    if(this.videoData) {
      if(this.videoData.paused) {
        this.videoData.play();
        this.statusText.text = "Playing";
        this.overlayGraphics.alpha = 0;
      } else {
        this.videoData.pause();
        this.statusText.text = "Paused";
        this.overlayGraphics.alpha = 1;
      }
    }
  }

  async preload() {
    this.statusText.text = "Loading";
    if(!Loader.shared.resources[this.videoUrl]) {
      // If not already loaded
      await new Promise((resolve) => {
        Loader.shared.add(this.videoUrl).load(resolve)
      });
    }

    this.videoData = Loader.shared.resources[this.videoUrl].data
    const videoBaseTexture: Texture = Texture.from(this.videoData);

    setTimeout(() => {
      this.videoData.currentTime = 0;
      this.videoData.pause();
    }, 0);

    this.videoSprite = Sprite.from(videoBaseTexture);
    this.nativeWidth = this.videoSprite.width;
    this.nativeHeight = this.videoSprite.height;
    this.nativeRatio = this.nativeWidth / this.nativeHeight;

    const scale = this.playerWidth / this.nativeWidth;
    this.videoSprite.scale.set(scale);
    this.addChild(this.videoSprite);
    this.videoSprite.position.set(0,0);
    this.isLoaded = true;

    // Bring overlay back to top
    this.removeChild(this.overlayGraphics);
    this.addChild(this.overlayGraphics);
    this.removeChild(this.statusText);
    this.addChild(this.statusText);

    this.statusText.text = "Paused";
    this.overlayGraphics.position.set(this.playerWidth / 2, this.videoSprite.height / 2);
  }

  destroy() {
    // @TODO - clear loading of video if still in progress
    super.destroy();
    if(this.videoData) {
      this.videoData.currentTime = 0;
      this.videoData.pause();
    }
  }
}
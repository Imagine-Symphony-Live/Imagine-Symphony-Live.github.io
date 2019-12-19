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
  private animationFrameId: number;

  constructor(public videoUrl: string, public playerWidth: number = 256, public accentColor: number = 0xeeeeee) {
    super();

    this.overlayGraphics = new Graphics();
    this.addChild(this.overlayGraphics);
    this.overlayGraphics.position.set(this.playerWidth / 2, 0);
    this.updateGraphics();

    this.statusText = new Text('Unloaded', TEXT_STYLE_BIO_P);
    this.statusText.visible = false;
    this.addChild(this.statusText);
    this.statusText.anchor.set(0,0);
    this.statusText.position.set(0, 0);

    this.interactive = true;
    this.cursor = "pointer";
    this.on('pointerdown', this.interact.bind(this));
  }

  interact() {
    if(this.videoData) {
      if(this.videoData.paused) {
        this.videoData.play();
        this.statusText.text = "Playing";
        if(this.animationFrameId === -1) {
          this.animationFrameId = window.requestAnimationFrame(this.updateGraphics.bind(this));
        }
      } else {
        this.videoData.pause();
        this.statusText.text = "Paused";
        this.updateGraphics();
        if(this.animationFrameId !== -1) {
          window.cancelAnimationFrame(this.animationFrameId);
          this.animationFrameId = -1;
        }
      }
    }
  }

  get currentTime(): number {
    return this.videoData.currentTime
  }
  get duration(): number {
    return this.videoData.duration;
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

    this.videoSprite = new Sprite(videoBaseTexture);
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

  updateGraphics() {
    this.animationFrameId = window.requestAnimationFrame(this.updateGraphics.bind(this));
    this.overlayGraphics.clear();
    if(this.videoData) {
      if(this.videoData.paused) {
        this.overlayGraphics.beginFill(this.accentColor);
        const r = this.playerWidth/10;
        const c = Math.cos(Math.PI * 2/3);
        const s = Math.sin(Math.PI * 2/3);
        this.overlayGraphics.drawPolygon([
          new Point(c * r, -s * r),
          new Point(r, 0),
          new Point(c * r, s * r),
        ])
        this.overlayGraphics.endFill();
      }
    }
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
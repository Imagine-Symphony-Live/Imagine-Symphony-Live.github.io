import { VideoPlayer } from "./video-player";
import { Graphics } from "pixi.js";

export class RoundVideoPlayer extends VideoPlayer {
  protected maskGraphic: Graphics;

  constructor(public videoUrl: string, public playerRadius: number = 64) {
    super(videoUrl, playerRadius * 2);

    const background = new Graphics();
    background.beginFill(0x000000);
    background.drawRect(0,0,this.playerRadius*2, this.playerRadius*2);
    background.endFill();
    this.addChild(background);
    this.maskGraphic = new Graphics();
    this.addChild(this.maskGraphic);
    this.mask = this.maskGraphic;
    this.maskGraphic.position.set(0,0);
    this.maskGraphic.beginFill(0xffffff, 1);
    this.maskGraphic.drawCircle(this.playerRadius,this.playerRadius,this.playerRadius);
    this.maskGraphic.endFill();
  }

  async preload() {
    await super.preload();

    // Calculate video sprite size based on target radius
    this.videoSprite.height = this.playerRadius*2;
    this.videoSprite.width = this.nativeRatio * this.videoSprite.height;

    // Recenter video
    const x = - (this.videoSprite.width - this.playerRadius * 2) / 2;
    this.videoSprite.position.set(x,0);

    // Recenter graphics
    this.overlayGraphics.position.set(this.playerWidth / 2, this.videoSprite.height / 2);
  }
}
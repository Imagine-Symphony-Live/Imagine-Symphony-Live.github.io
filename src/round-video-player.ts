import { VideoPlayer } from "./video-player";
import { Graphics } from "pixi.js";

const PLAYER_SCRUB_SIZE = 4;

export class RoundVideoPlayer extends VideoPlayer {
  protected maskGraphic: Graphics;

  constructor(public videoUrl: string, public playerRadius: number = 64, public accentColor: number = 0xffffff) {
    super(videoUrl, playerRadius * 2, accentColor);
    this.updateGraphics();

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

  updateGraphics() {
    super.updateGraphics();
    this.overlayGraphics.lineStyle(PLAYER_SCRUB_SIZE, 0x000000, 0.6, 0);
    this.overlayGraphics.drawCircle(0, 0, this.playerRadius);
    if(this.videoData) {
      const percent = this.currentTime / this.duration;
      if(percent !== NaN && percent > 0) {
        this.overlayGraphics.lineStyle(PLAYER_SCRUB_SIZE + 5, this.accentColor, 1, 0);
        if(percent >= 1) {
          this.overlayGraphics.drawCircle(0, 0, this.playerRadius + 5);
        } else {
          const arc =  Math.PI * 2 * percent;
          this.overlayGraphics.arc(0, 0, this.playerRadius + 5, -Math.PI / 2, -Math.PI / 2 + arc);
        }
      }
    }
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
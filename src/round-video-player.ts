import { VideoPlayer } from "./video-player";
import { Graphics } from "pixi.js";
const PLAYER_RADIUS = 64;

export class RoundVideoPlayer extends VideoPlayer {
  maskGraphic: Graphics;

  constructor(public videoUrl: string) {
    super(videoUrl, PLAYER_RADIUS * 2);

    this.maskGraphic = new Graphics();
    this.addChild(this.maskGraphic);
    this.mask = this.maskGraphic;
    this.maskGraphic.position.set(0,0);
    this.maskGraphic.beginFill(0xffffff, 1);
    this.maskGraphic.drawCircle(PLAYER_RADIUS,PLAYER_RADIUS,PLAYER_RADIUS);
    this.maskGraphic.endFill();
  }

  async preload() {
    await super.preload();

    // Calculate video sprite size based on target radius
    this.videoSprite.height = PLAYER_RADIUS*2;
    this.videoSprite.width = this.nativeRatio * this.videoSprite.height;

    // Recenter video
    const x = - (this.videoSprite.width - PLAYER_RADIUS * 2) / 2;
    this.videoSprite.position.set(x,0);

    // Recenter graphics
    this.overlayGraphics.position.set(this.playerWidth / 2, this.videoSprite.height / 2);
  }
}
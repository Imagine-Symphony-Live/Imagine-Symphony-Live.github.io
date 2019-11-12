import { Container, Loader, Texture, Sprite, Graphics, Text } from "pixi.js";
import { TEXT_STYLE_BIO_P } from "./styles";

const PLAYER_WIDTH = 256;

export class VideoPlayer extends Container {
  isLoaded: boolean = false;
  private videoSprite: Sprite;
  private videoData: HTMLVideoElement;
  private overlayGrpahics: Graphics;
  private statusText: Text;

  constructor(public videoUrl: string) {
    super();

    this.overlayGrpahics = new Graphics();
    this.overlayGrpahics.beginFill(0xeeeeee);
    this.overlayGrpahics.drawCircle(0,0,32);
    this.overlayGrpahics.endFill();
    this.overlayGrpahics.position.set(PLAYER_WIDTH / 2, 0);

    this.addChild(this.overlayGrpahics);

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
        this.overlayGrpahics.alpha = 0;
      } else {
        this.videoData.pause();
        this.statusText.text = "Paused";
        this.overlayGrpahics.alpha = 1;
      }
    }
  }

  async preload() {
    this.statusText.text = "Loading";
    if(!Loader.shared.resources[this.videoUrl]) {
      // If not alreayd loaded
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
    const scale = 256 / this.videoSprite.width;
    this.videoSprite.scale.set(scale);
    this.addChild(this.videoSprite);
    this.videoSprite.position.set(0,0);
    this.isLoaded = true;

    // Bring overlay back to top
    this.removeChild(this.overlayGrpahics);
    this.addChild(this.overlayGrpahics);
    this.removeChild(this.statusText);
    this.addChild(this.statusText);


    this.statusText.text = "Paused";
    this.overlayGrpahics.position.set(PLAYER_WIDTH / 2, this.videoSprite.height / 2);
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
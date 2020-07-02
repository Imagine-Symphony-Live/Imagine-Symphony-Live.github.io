import { Graphics, Container, Text } from "pixi.js";
import { TEXT_STYLE_LOADING } from "./styles";

const PROGRESS_BAR_WIDTH = 200;
const PROGRESS_BAR_HEIGHT = 30;

export default class ProgressBar extends Container {
  private _progress: number = 0;
  private graphics: Graphics = new Graphics();
  private needDraw = false;
  private loadingText = new Text("Loading", TEXT_STYLE_LOADING);

  constructor() {
    super();
    this.addChild(this.graphics);
    this.addChild(this.loadingText);
    this.loadingText.anchor.set(0.5);
    this.loadingText.position.set(0,0);
    this.needDraw = true;
  }

  set progress(p: number) {
    this._progress = Math.max(0, Math.min(p, 1));
    this.needDraw = true;
  }

  get progress(): number {
    return this._progress;
  }

  onTick(deltaMs) {
    if(this.needDraw) {
      this.draw();
    }
  }

  draw() {
    this.graphics.clear()
      // .beginFill(0x000000)
      // .drawRect(-window.innerWidth/2, -window.innerHeight/2, window.innerWidth, window.innerHeight)
      // .endFill()
      .lineStyle(2, 0xffffff)
      .drawRect(-PROGRESS_BAR_WIDTH/2, -PROGRESS_BAR_HEIGHT/2, PROGRESS_BAR_WIDTH, PROGRESS_BAR_HEIGHT)
      .beginFill(0xffffff)
      .drawRect(-PROGRESS_BAR_WIDTH/2, -PROGRESS_BAR_HEIGHT/2, PROGRESS_BAR_WIDTH * this.progress, PROGRESS_BAR_HEIGHT)

    this.needDraw = false;
  }

}
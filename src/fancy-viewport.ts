import { Viewport, ViewportOptions } from "pixi-viewport";
import TWEEN from "@tweenjs/tween.js";
import { Container, DisplayObject } from "pixi.js";

export class FancyViewport extends Container {
  private moveTween?: TWEEN.Tween;
  private viewPort: Viewport;

  constructor(options: ViewportOptions) {
    super();
    this.viewPort = new Viewport(options);

    this.viewPort
      .drag()
      .pinch()
      .wheel()
      .decelerate();

    super.addChild(this.viewPort);
  }

  addChild<TChildren extends DisplayObject[]>(...child: TChildren): TChildren[0] {
    return this.viewPort.addChild(...child);
  }

  moveCenter(x: number, y: number) {
    this.viewPort.moveCenter(x, y);
  }

  transitionCenter(x: number, y: number, time: number = 100) {
    if(this.moveTween) {
      this.moveTween.stop();
    }

    this.moveTween = new TWEEN.Tween({x: this.viewPort.center.x, y: this.viewPort.center.y})
      .to({x, y}, time)
      .easing( TWEEN.Easing.Cubic.Out )
      .onUpdate(({x, y}) => {
        this.moveCenter(x,y);
      })
      .start();
  }
}
import { Container, Text } from "pixi.js";
import { Viewport } from "pixi-viewport";

export class Toolbar extends Container {
  constructor(viewport: Viewport, canvas: HTMLCanvasElement, ) {
    super();
    const snapCenterButt = new Text("[C]");
    snapCenterButt.interactive = true;
    snapCenterButt.on("pointertap", () => {
      viewport.moveCenter(0,0);
    });
    snapCenterButt.scale.set(5, 5);
    snapCenterButt.anchor.set(0, 0);
    this.addChild(snapCenterButt);
    snapCenterButt.position.set(0, 0);

    const fullScreenButt = new Text("[F]");
    fullScreenButt.interactive = true;
    fullScreenButt.on("pointertap", () => {
      canvas.requestFullscreen();
    });
    fullScreenButt.scale.set(5, 5);
    fullScreenButt.anchor.set(1, 0);
    this.addChild(fullScreenButt);
    fullScreenButt.position.set(window.innerWidth, 0);
  }
}
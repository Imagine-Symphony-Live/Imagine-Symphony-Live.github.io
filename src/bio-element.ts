import { Container, Graphics } from "pixi.js";
import { Musician } from "./types/musician";

export class BioElement extends Container {
  private graphics: Graphics = new Graphics();

  constructor(public musician: Musician) {
    super();

    this.interactive = true;
    this.cursor = "pointer";
    this.draw();
    this.addChild(this.graphics);
  }

  draw() {
    this.graphics.clear();
    this.graphics.beginFill(0xaaaaaa);
    this.graphics.drawCircle(0, 0, 32);
    this.graphics.endFill();
  }
}
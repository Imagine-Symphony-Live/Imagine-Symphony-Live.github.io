import { Container, Graphics, Text } from "pixi.js";
import { Musician } from "./types/musician";

const BIO_RADIUS = 32;

export class BioElement extends Container {
  private graphics: Graphics = new Graphics();
  private focusContent: Container = new Container();
  public isActive = false;
  public isFocused = false;

  constructor(public musician: Musician) {
    super();

    const bioName = new Text(musician.name);
    bioName.anchor.set(0, 0.5);
    this.focusContent.addChild(bioName);
    bioName.position.set(BIO_RADIUS + 5, 0);
    this.focusContent.visible = false;
    this.addChild(this.focusContent);

    this.interactive = true;
    this.cursor = "pointer";
    this.draw();
    this.addChild(this.graphics);
    this.on("pointertap", this.focus.bind(this));
  }

  focus() {
    if(this.isFocused) return;
    this.isFocused = true;
    this.focusContent.visible = true;
    this.emit("focused");

    // Also activate if not already
    if(!this.isActive) {
      this.activate();
    }

    this.draw();
  }

  unfocus() {
    if(!this.isFocused) return;
    this.isFocused = false;
    this.focusContent.visible = false;
    this.emit("unfocused");
    this.draw();
  }

  activate() {
    if(this.isActive) return;
    this.isActive = true;
    this.emit("activated");
  }

  deactivate() {
    if(!this.isActive) return;
    this.isActive = false;
  }

  draw() {
    this.graphics.clear();
    this.graphics.beginFill(this.isActive ? 0x00aaff00 : 0xaaaaaa);
    this.graphics.drawCircle(0, 0, BIO_RADIUS);
    this.graphics.endFill();
  }
}
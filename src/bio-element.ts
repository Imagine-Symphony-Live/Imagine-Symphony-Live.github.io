import { Container, Graphics, Text } from "pixi.js";
import { Musician } from "./types/musician";
import TWEEN from "@tweenjs/tween.js";
import { INSTRUMENT_COLORS, DEFAULT_INSTRUMENT_COLOR } from "./colors";
import { TEXT_STYLE_H2 } from "./styles";

const BIO_RADIUS = 32;

export class BioElement extends Container {
  private graphics: Graphics = new Graphics();
  private focusContent: Container = new Container();
  public isActive = false;
  public isFocused = false;

  constructor(public musician: Musician) {
    super();

    this.clearFocusContent();
    this.graphics.interactive = true;
    this.graphics.cursor = "pointer";
    this.draw();
    this.addChild(this.graphics);
    this.graphics.on("pointertap", this.focus.bind(this));
  }

  focus() {
    if(this.isFocused) return;
    this.isFocused = true;
    this.zIndex = 1;

    this.prepareFocusContet();
    new TWEEN.Tween({alpha: 0})
      .to({alpha: 1}, 500)
      .easing( TWEEN.Easing.Cubic.Out )
      .onStart(() => {
        this.focusContent.alpha = 0;
        this.focusContent.visible = true;
      })
      .onUpdate(({alpha}) => {
        this.focusContent.alpha = alpha;
      })
      .start();

    this.emit("focused");

    // Also activate if not already
    if(!this.isActive) {
      this.activate();
    }
  }

  unfocus() {
    if(!this.isFocused) return;
    this.isFocused = false;
    this.zIndex = 0;

    new TWEEN.Tween({alpha: 1})
      .to({alpha: 0}, 100)
      .easing( TWEEN.Easing.Cubic.Out )
      .onStart(() => {
        this.focusContent.alpha = 1;
        this.focusContent.visible = true;
      })
      .onUpdate(({alpha}) => {
        this.focusContent.alpha = alpha;
      })
      .onComplete(() => {
        this.focusContent.visible = false;
        this.clearFocusContent();
      })
      .start();

    this.emit("unfocused");
  }

  activate() {
    if(this.isActive) return;
    this.isActive = true;
    this.emit("activated");
    this.draw();
  }

  deactivate() {
    if(!this.isActive) return;
    this.isActive = false;
  }

  clearFocusContent() {
    if(this.focusContent) {
      this.removeChild(this.focusContent);
      this.focusContent.destroy();
      this.focusContent = new Container();
      this.addChild(this.focusContent);
    }
    this.focusContent.visible = false;
  }

  prepareFocusContet() {
    if(this.focusContent.children.length > 0) return;
    const bioName = new Text(this.musician.instrument.toUpperCase(), TEXT_STYLE_H2);
    bioName.anchor.set(0, 0.5);
    this.focusContent.addChild(bioName);
    bioName.position.set(BIO_RADIUS + 5, 0);
  }

  draw() {
    this.graphics.clear();
    if(this.isActive) {
      if(INSTRUMENT_COLORS[this.musician.instrument]) {
        this.graphics.beginFill(INSTRUMENT_COLORS[this.musician.instrument]);
      } else {
        this.graphics.beginFill(DEFAULT_INSTRUMENT_COLOR);
      }
    } else {
      this.graphics.beginFill(0xdddddd, 0.3);
    }
    this.graphics.drawCircle(0, 0, BIO_RADIUS);
    this.graphics.endFill();
  }
}
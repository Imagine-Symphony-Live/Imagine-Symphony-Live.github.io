import { Container, Graphics, Text, Rectangle } from "pixi.js";
import { Musician } from "./types/musician";
import TWEEN from "@tweenjs/tween.js";
import { INSTRUMENT_COLORS, DEFAULT_INSTRUMENT_COLOR } from "./colors";
import { TEXT_STYLE_H2, TEXT_STYLE_BIO_P } from "./styles";
import { VideoPlayer } from "./video-player";

const BIO_RADIUS = 32;
const BIO_CONTENT_PADDING = 10;

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

    this.focusContent.position.set(BIO_RADIUS, -BIO_RADIUS);

    const graphicsBkg = new Graphics();
    this.focusContent.addChild(graphicsBkg);

    // Musicians Name with instrument
    const bioName = new Text(`${this.musician.name} (${this.musician.instrument})`, TEXT_STYLE_H2);
    bioName.anchor.set(0, 0);
    this.focusContent.addChild(bioName);
    bioName.position.set(BIO_CONTENT_PADDING, BIO_CONTENT_PADDING);

    // Musicians Bio Content
    if(this.musician.biography) {
      const bioContent = new Text(this.musician.biography, TEXT_STYLE_BIO_P);
      bioContent.anchor.set(0, 0);
      this.focusContent.addChild(bioContent);
      bioContent.position.set(BIO_CONTENT_PADDING, bioName.height + BIO_CONTENT_PADDING * 2);
    }

    // Video playet
    if(this.musician.video) {
      const player = new VideoPlayer(this.musician.video);
      this.focusContent.addChild(player);
      player.position.set(BIO_CONTENT_PADDING, this.focusContent.height + BIO_CONTENT_PADDING);
      player.preload();
    }

    // Rectangle background
    graphicsBkg.beginFill(INSTRUMENT_COLORS[this.musician.instrument]);
    graphicsBkg.lineStyle(0);
    // Main bkg for text
    graphicsBkg.drawRect(0, 0, this.focusContent.width + BIO_CONTENT_PADDING, this.focusContent.height + BIO_CONTENT_PADDING);
    graphicsBkg.endFill();

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
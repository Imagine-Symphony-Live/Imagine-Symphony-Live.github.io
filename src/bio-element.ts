import { Container, Graphics, Text, Point } from "pixi.js";
import { Musician } from "./types/musician";
import TWEEN from "@tweenjs/tween.js";
import { INSTRUMENT_COLORS, DEFAULT_INSTRUMENT_COLOR } from "./colors";
import { TEXT_STYLE_H2, TEXT_STYLE_BIO_P, TET_STYLE_BIO_SUBTITLE } from "./styles";
import { VideoPlayer } from "./video-player";
import { RoundVideoPlayer } from "./round-video-player";

const OUTER_RADIUS = 32;
const INNER_RADIUS = 25;
const LINE_THICK = 3;
const BOX_LINE_THICK = 7;
const BIO_CONTENT_PADDING = 30;
const BIO_CONTENT_SPACING = 15;
const BIO_WIDTH = 500 + BIO_CONTENT_PADDING * 2;
const BIO_BOX_X = 96;

export class BioElement extends Container {
  private graphics: Graphics = new Graphics();
  private focusContent: Container = new Container();
  public isActive = false;
  public isFocused = false;
  public isVisited = false;

  constructor(public musician: Musician) {
    super();

    this.sortableChildren = true;
    this.graphics.zIndex = -1;
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
    this.isVisited = true;
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
    } else {
      this.draw();
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
        this.draw();
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

    const color = INSTRUMENT_COLORS[this.musician.instrument] || DEFAULT_INSTRUMENT_COLOR;
    const calculatedOuterRad = this.musician.bioText || this.musician.video ? OUTER_RADIUS : INNER_RADIUS;

    const graphicsBkg = new Graphics();
    this.focusContent.addChild(graphicsBkg);

    // Musicians Name with instrument
    const bioName = new Text(`${this.musician.name}`, TEXT_STYLE_H2);
    bioName.anchor.set(0.5, 0);
    this.focusContent.addChild(bioName);
    bioName.position.set(BIO_WIDTH / 2 + BIO_BOX_X, BIO_CONTENT_PADDING);

    // Subtitle
    const subTitle = new Text(`Plays ${this.musician.instrument}`, TET_STYLE_BIO_SUBTITLE);
    subTitle.anchor.set(0.5, 0);
    this.focusContent.addChild(subTitle);
    subTitle.position.set(BIO_WIDTH / 2 + BIO_BOX_X, bioName.position.y + bioName.height + BIO_CONTENT_SPACING);

    // Musicians Bio Content
    if(this.musician.bioText) {
      const bioContent = new Text(this.musician.bioText, TEXT_STYLE_BIO_P);
      bioContent.anchor.set(0.5, 0);
      this.focusContent.addChild(bioContent);
      bioContent.position.set(BIO_WIDTH / 2 + BIO_BOX_X, subTitle.position.y + subTitle.height + BIO_CONTENT_SPACING);
    }

    let contentHeight = this.focusContent.height;
    // Rectangle background
    graphicsBkg.beginFill(0, 0.5);
    graphicsBkg.lineStyle(BOX_LINE_THICK, color, 1, 0);
    // Main bkg for text
    graphicsBkg.drawRect(BIO_BOX_X, 0, BIO_WIDTH, contentHeight + BIO_CONTENT_PADDING);
    graphicsBkg.endFill();
    // Draw connecting line

    contentHeight = this.focusContent.height;
    graphicsBkg.lineStyle(LINE_THICK, color, 1, 0.5);
    graphicsBkg.moveTo(calculatedOuterRad, contentHeight / 2);
    graphicsBkg.lineTo(BIO_BOX_X, contentHeight / 2);

    this.focusContent.position.set(0, -this.focusContent.height / 2);

    // Video player
    if(this.musician.video) {
      const player = new RoundVideoPlayer(this.musician.video, 64);
      this.focusContent.addChild(player);
      player.position.set(-64, (contentHeight / 2) - 64);
      player.preload();
    }
  }

  draw() {
    this.graphics.clear();

    const color = INSTRUMENT_COLORS[this.musician.instrument] || DEFAULT_INSTRUMENT_COLOR;
    const alpha = this.isVisited && !this.isFocused ? 0.1 : 1;

    // This invisible circle gives the element a click area
    if(this.isFocused) {
      this.graphics.beginFill(0, 0.5);
    } else if(this.isVisited) {
      this.graphics.beginFill(color, 0.4);
    } else {
      this.graphics.beginFill(0, 0.01);
    }

    if(this.musician.bioText || this.musician.video) {
      this.graphics.drawCircle(0, 0, OUTER_RADIUS);
    } else {
      this.graphics.drawCircle(0, 0, INNER_RADIUS);
    }

    this.graphics.endFill();


    this.graphics.lineStyle(LINE_THICK, color, alpha, 0);

    if(!this.isFocused) {
      if(this.musician.bioText || this.musician.video) {
        this.graphics.drawCircle(0, 0, OUTER_RADIUS);
      }
    }

    if(this.musician.video) {
      this.graphics.beginFill(color, alpha);
      const r = INNER_RADIUS-LINE_THICK*3;
      const c = Math.cos(Math.PI * 2/3);
      const s = Math.sin(Math.PI * 2/3);
      this.graphics.drawPolygon([
        new Point(c * r, -s * r),
        new Point(r, 0),
        new Point(c * r, s * r),
      ])
      this.graphics.endFill();
    }

    if(!this.isFocused) {
      this.graphics.drawCircle(0, 0, INNER_RADIUS);
    }
  }
}
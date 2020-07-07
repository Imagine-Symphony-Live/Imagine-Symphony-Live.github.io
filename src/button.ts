import { Container, Text } from "pixi.js";
import { TEXT_STYLE_BUTTON, TEXT_STYLE_BUTTON_HOVER } from "./styles";

export class Button extends Container {
  private _text: Text = new Text("", TEXT_STYLE_BUTTON);

  constructor(s: string) {
    super();

    this.text = s;
    this.addChild(this._text);
    this._text.anchor.set(0.5);
    this._text.position.set(0,0);
    this.interactive = true;
    this.cursor = "pointer";
    this.on("mouseover", () => {
      //app.renderer.backgroundColor = 0x111111;
      this._text.style = TEXT_STYLE_BUTTON_HOVER;
    });
    this.on("mouseout", () => {
      this._text.style = TEXT_STYLE_BUTTON ;
    });
  }

  set text(s: string) {
    this._text.text = s;
  }

  multiplierResize(multiplier: number) {
    this._text.scale.set(multiplier);
  }

}
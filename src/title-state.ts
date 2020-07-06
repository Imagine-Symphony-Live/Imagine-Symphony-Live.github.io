import { Container, Application, Text, Sprite } from "pixi.js";
import State from "./state";
import { TEXT_STYLE_H1, TEXT_STYLE_H1_HOVER } from "./styles";
import logoUrl from '../assets/images/logo.png';

export default class TitleState extends State {
  private playButton: Text;
  private logo: Sprite;
  async createContainer(app: Application): Promise<Container> {

    const container = new Container();

    this.logo = Sprite.from(logoUrl);
    this.logo.anchor.set(0.5, 1);

    container.addChild(this.logo);

    this.playButton = new Text("play", TEXT_STYLE_H1);
    this.playButton.anchor.set(0.5);
    this.playButton.interactive = true;
    this.playButton.cursor = "pointer";
    this.playButton.on("mouseover", () => {
      //app.renderer.backgroundColor = 0x111111;
      this.playButton.style = TEXT_STYLE_H1_HOVER;
    });
    this.playButton.on("mouseout", () => {
      app.renderer.backgroundColor = 0x000000;
      this.playButton.style = TEXT_STYLE_H1 ;
    });
    this.playButton.on("mouseup", () => {
      this.events.get("complete").dispatch(this, 1);
    });
    container.addChild(this.playButton);

    app.renderer.backgroundColor = 0x000000;

    return container;
  }

  onResize(size: {width: number, height: number}) {
    const logoscale = Math.min(1, size.width / 1529);
    this.logo.scale.set(logoscale);
    this.logo.position.set(size.width/2, size.height/2 - 50);
    this.playButton.position.set(size.width/2, size.height/2);
  }

  async cleanUp() {

  }

}
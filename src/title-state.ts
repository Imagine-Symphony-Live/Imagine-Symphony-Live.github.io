import { Container, Application, Text, Sprite, BLEND_MODES } from "pixi.js";
import State from "./state";
import { TEXT_STYLE_H1, TEXT_STYLE_H1_HOVER } from "./styles";
import logoUrl from '../assets/images/logo.png';
import titleBkgUrl from '../assets/images/title-bkg.jpg';

export default class TitleState extends State {
  private playButton: Text;
  private logo: Sprite;
  private bkg: Sprite;
  async createContainer(app: Application): Promise<Container> {

    const container = new Container();

    this.bkg = Sprite.from(titleBkgUrl);
    this.bkg.alpha = 0.5
    this.bkg.anchor.set(0.5, 0.5);
    this.logo = Sprite.from(logoUrl);
    this.logo.anchor.set(0.5, 1);

    container.addChild(this.bkg);
    container.addChild(this.logo);

    this.playButton = new Text("PLAY", TEXT_STYLE_H1);
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
    this.playButton.on("pointertap", () => {
      try {
        app.view.requestFullscreen();
      } finally {
        this.events.get("complete").dispatch(this, 1);
      }
    });
    container.addChild(this.playButton);

    app.renderer.backgroundColor = 0x000000;

    return container;
  }

  onResize(size: {width: number, height: number}) {
    const scale = Math.min(1, size.width / 1529);
    this.logo.scale.set(scale);
    this.logo.position.set(size.width/2, size.height/2 - 10 * scale);
    this.bkg.scale.set(scale);
    this.bkg.position.set(size.width/2, size.height/2);
    this.playButton.scale.set(scale);
    this.playButton.position.set(size.width/2, size.height/2 + 50 * scale);
  }

  async cleanUp() {

  }

}
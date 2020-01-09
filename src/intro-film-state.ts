import { Container, Application } from "pixi.js";
import { FilmVideoPlayer } from "./film-player";
import introFilmUrl from '../assets/video/film.mp4';
import State from "./state";

export default class IntroFilmState extends State {
  protected videoPlayer: FilmVideoPlayer;

  async createContainer(app: Application): Promise<Container> {
    this.videoPlayer = new FilmVideoPlayer(introFilmUrl, 1024);
    this.videoPlayer.on("ended", () => {
      this.events.get("complete").dispatch(this, null);
      this.cleanUp();
    })
    await this.videoPlayer.preload();

    const container = new Container();
    container.addChild(this.videoPlayer);
    this.videoPlayer.position.set(0,0);

    app.renderer.backgroundColor = 0x000000;

    return container;
  }

  async cleanUp() {
    this.videoPlayer.destroy();
  }

}
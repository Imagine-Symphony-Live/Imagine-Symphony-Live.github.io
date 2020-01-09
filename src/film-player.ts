import { VideoPlayer } from "./video-player";


export class FilmVideoPlayer extends VideoPlayer {
  constructor(public videoUrl: string, public width: number = 1920, public accentColor: number = 0xff0000) {
    super(videoUrl, width, accentColor);
  }

  async preload() {
    await super.preload();

    // Temporary - get's through it quick
    this.videoData.playbackRate = 14;
  }

}
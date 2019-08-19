import { Howl } from 'howler';

export class SoundManager {
  private howls: Howl[];

  constructor(private tracks: string[]) {

  }

  activateTrack(track: string) {
    const index = this.tracks.indexOf(track);
    if(index !== -1 && this.howls[index] && this.howls[index].volume() === 0) {
      this.howls[index].fade(0, 1, 500);
    }
  }

  async loadSounds() {

    this.howls = this.tracks.map((url) => new Howl({
      src: [url],
      loop: true,
    }));

    // wait for all to load
    await Promise.all(this.howls.map((h) => new Promise((r) => h.once('load', r))));

    this.howls.forEach((h) => h.volume(0));
    this.howls.forEach((h) => h.play());

    if(this.howls.length > 1) {
      setTimeout(this.resync.bind(this), 0);
    }
  }

  private resync() {
    if(this.howls.length > 1) {
      const masterPos = this.howls[0].seek() as number;
      for (let i = 1; i < this.howls.length; i++) {
        this.howls[i].seek(masterPos);
      }
    }
  }
}
import { Howl } from 'howler';

type Sound = {
  url: string,
  howl: Howl,
  active: boolean,
}
export class SoundManager {
  private sounds: Sound[];

  constructor(tracks: string[]) {
    this.sounds = tracks.map((url) => ({
      url,
      active: false,
      howl: new Howl({
        src: [url],
        loop: true,
      })
    }));
  }

  activateTrack(track: string) {
    const sound = this.sounds.find(({url}) => url === track);
    if(sound && !sound.active) {
      sound.active = true;
      sound.howl.fade(0, 0.7, 500);
    }
  }

  async loadSounds() {

    // wait for all to load
    await Promise.all(this.sounds.map(({howl}) => new Promise((r) => howl.once('load', r))));

    this.sounds.forEach(({howl}) => howl.volume(0));
    this.sounds.forEach(({howl}) => howl.play());

    if(this.sounds.length > 1) {
      setTimeout(this.resync.bind(this), 0);
    }
  }

  private resync() {
    if(this.sounds.length > 1) {
      const masterPos = this.sounds[0].howl.seek() as number;
      for (let i = 1; i < this.sounds.length; i++) {
        this.sounds[i].howl.seek(masterPos);
      }
    }
  }
}
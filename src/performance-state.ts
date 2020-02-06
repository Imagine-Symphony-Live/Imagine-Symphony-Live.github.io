import { Container, Application } from "pixi.js";
import fullSong from '../assets/music/full-composition.ogg';
import ClickTrack from 'click-track';
import State from "./state";
import { InstrumentVisual } from "./instrument-visual";
import { Instrument } from "./types/instruments";

type NoteCue = {
  duration: number,
  instrument: InstrumentVisual,
}

type InstrumentExpression = {
  name: Instrument,
  color: number,
  ramp?: number,
  cues: Array<[number, number, number]>
}

const InstrumentExpressionData: Array<InstrumentExpression> = [
  {
    name: "Flute",
    color: 0xffff00,
    cues: [
      // Measure, beat, duration
      [15, 2, 0.5],
      [15, 3, 0.5],
      [15, 4, 0.5],
      [15, 5, 0.5],
      [15, 6, 0.5],
      [15, 7, 6],
    ]
  },
  {
    name: "Bass Clarinet",
    color: 0xffaa00,
    cues: [
      // Measure, beat, duration
      [17, 1.0, 0.25],
      [17, 1.5, 0.25],
      [17, 2.0, 0.25],
      [17, 2.5, 0.25],
      [17, 3.0, 0.25],
      [17, 3.5, 0.25],
      [17, 4.0, 0.25],
      [17, 4.5, 0.25],
      [17, 5.0, 0.25],
      [17, 5.5, 0.25],
      [17, 6.0, 0.25],
      [17, 6.5, 0.25],
      [17, 7.0, 6],
    ]
  },
  {
    name: "Viola",
    color: 0x00ffaa,
    ramp: 0.4,
    cues: [
      // Measure, beat, duration
      [25, 1.0, 1.25],
      [25, 2.5, 1.25],
      [25, 4.0, 1.25],
      [25, 5.5, 1.25],
      [25, 7.0, 5.75],
      [27, 1.0, 1.25],
      [27, 2.5, 1.25],
      [27, 4.0, 1.25],
      [27, 5.5, 1.25],
      [27, 7.0, 1.25],
      [27, 8.5, 1.25],
      [27, 9.0, 2.75],
      [29, 1.0, 1.25],
      [29, 2.5, 1.25],
      [29, 4.0, 1.25],
      [29, 5.5, 1.25],
      [29, 7.0, 1.25],
      [29, 8.5, 1.25],
      [29, 10.0, 1.25],
      [29, 11.5, 1.25],
      [29, 13.0, 1.25],
      [29, 14.5, 1.25],
      [29, 16.0, 1.25],
      [29, 17.5, 1.25],
      [29, 19.0, 5.75],
    ]
  }
]

export default class PerformanceState extends State {

  protected track: HTMLAudioElement;

  async createContainer(app: Application): Promise<Container> {

    const container = new Container();
    const track: HTMLAudioElement = new Audio(fullSong);
    track.playbackRate = 1;

    const cues: Array<[number, NoteCue]> = [];

    const instruments = InstrumentExpressionData.map(({name, color, cues: theseCues, ramp = 1}) => {
      const visual = new InstrumentVisual(148, color, ramp);
      container.addChild(visual);
      visual.position.set(Math.random() * (window.innerWidth - 400) + 200 , Math.random() * (window.innerHeight - 400) + 200);

      cues.push(...theseCues.map<[number, NoteCue]>(([a,b,c]) => [
          (a - 1) * 6 + (b - 1),
          {
            duration: c,
            instrument: visual,
          }
        ]
      ));

      return visual;
    });

    cues.sort((a, b) => Math.sign(a[0] - b[0]));


    const start = () => {
      track.currentTime = 13 * 6 * (60 / 148);
      track.play();
      track.removeEventListener('canplaythrough', start);
    };

    track.addEventListener('canplaythrough', start);

    const clickTrack = new ClickTrack<NoteCue>({
      timerSource: () => track.currentTime,
      tempo: 148,
      offset: -0.2,
      cues: cues
    });

    clickTrack.on("cue", (clicktrack, cue) => {
      console.log(cue.drag);
      cue.data?.instrument.note(cue.data.duration);
    });

    app.renderer.backgroundColor = 0x55aacc;

    return container;
  }

  onResize(size: {width: number, height: number}) {

  }

  async cleanUp() {

  }

}
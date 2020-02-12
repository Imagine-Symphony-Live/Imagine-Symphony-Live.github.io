import { Container, Application } from "pixi.js";
import fullSong from '../assets/music/full-composition.ogg';
import ClickTrack from 'click-track';
import State from "./state";
import { InteractiveInstrument } from "./interactive-instrument";
import { Instrument } from "./types/instruments";

type InstrumentTrack = {
  name: Instrument,
  color: number,
  cues: Array<[number, number]>
}

function hue2rgb(p: number, q: number, t: number) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1/6) return p + (q - p) * 6 * t;
  if (t < 1/2) return q;
  if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
  return p;
}

function hslToRgb(h: number, s: number, l: number) {
  var r, g, b;

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {


    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;

    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  return r * 255 * Math.pow(256,2) + g * 255 * 256 + b * 255;
}

const interactiveDefinitions: Array<{
  name: Instrument,
  color: number,
  sA: number,
  eA: number,
  sR: number,
  eR: number
}> = [
  {
    name: "Cello",
    color: hslToRgb(Math.random(), 1, 0.5),
    sA: 0,
    eA: Math.PI / 6,
    sR: 3,
    eR: 7
  },
  {
    name: "Viola",
    color: hslToRgb(Math.random(), 1, 0.5),
    sA: Math.PI / 6,
    eA: Math.PI * 2 / 6,
    sR: 3,
    eR: 7
  },
  {
    name: "Bass",
    color: hslToRgb(Math.random(), 1, 0.5),
    sA: 0,
    eA: Math.PI * 2 / 6,
    sR: 7,
    eR: 10
  },
  {
    name: "Trumpet",
    color: hslToRgb(Math.random(), 1, 0.5),
    sA: Math.PI * 2 / 6,
    eA: Math.PI * 10 / 18,
    sR: 8,
    eR: 10
  },
  {
    name: "Timpani",
    color: hslToRgb(Math.random(), 1, 0.5),
    sA: Math.PI * 10 / 18,
    eA: Math.PI * 11 / 18,
    sR: 8,
    eR: 10
  },
  {
    name: "Xylophone",
    color: hslToRgb(Math.random(), 1, 0.5),
    sA: Math.PI * 11 / 18,
    eA: Math.PI * 5 / 6,
    sR: 8,
    eR: 10
  },
  {
    name: "Clarinet",
    color: hslToRgb(Math.random(), 1, 0.5),
    sA: Math.PI * 2 / 6,
    eA: Math.PI * 4 / 6,
    sR: 3,
    eR: 8
  },
  {
    name: "Violin",
    color: hslToRgb(Math.random(), 1, 0.5),
    sA: Math.PI * 4 / 6,
    eA: Math.PI * 5 / 6,
    sR: 3,
    eR: 8
  },
  {
    name: "Violin",
    color: hslToRgb(Math.random(), 1, 0.5),
    sA: Math.PI * 5 / 6,
    eA: Math.PI,
    sR: 3,
    eR: 10
  },
]

const InstrumentTracks: Array<InstrumentTrack> = [
  {
    name: "Flute",
    color: 0xffff00,
    cues: [
      // Measure, beat
      [15, 2.0],
    ]
  },
  {
    name: "Bass Clarinet",
    color: 0xffaa00,
    cues: [
      // Measure, beat
      [17, 1.0]
    ]
  },
  {
    name: "Viola",
    color: 0x00ffaa,
    cues: [
      // Measure, beat
      [25, 1.0]
    ]
  }
];

export default class PerformanceState extends State {

  protected track: HTMLAudioElement;

  async createContainer(app: Application): Promise<Container> {

    const container = new Container();
    const track: HTMLAudioElement = new Audio(fullSong);
    track.playbackRate = 1;

    const cues: Array<[number, InteractiveInstrument]> = [];

    // Assemble cues here

    cues.sort((a, b) => Math.sign(a[0] - b[0]));

    const start = () => {
      track.currentTime = 13 * 6 * (60 / 148);
      track.play();
      track.removeEventListener('canplaythrough', start);
    };

    // This triggers when music track is fully loaded
    //track.addEventListener('canplaythrough', start);

    const multiplier = (window.innerHeight -  50) * 3 / 40;

    interactiveDefinitions.forEach((d) => {
      const s1 = new InteractiveInstrument(d.sR*multiplier, d.eR*multiplier, d.sA, d.eA, d.color);
      s1.position.set(window.innerWidth / 2, window.innerHeight * 3 / 4);
      container.addChild(s1);
    });

    const clickTrack = new ClickTrack<InteractiveInstrument>({
      timerSource: () => track.currentTime,
      tempo: 148,
      offset: -0.2,
      cues: cues
    });

    clickTrack.on("cue", (clicktrack, cue) => {
      //cue.data?.instrument.note(cue.data.duration);
    });

    app.renderer.backgroundColor = 0x55aacc;

    return container;
  }

  onResize(size: {width: number, height: number}) {

  }

  async cleanUp() {

  }

}
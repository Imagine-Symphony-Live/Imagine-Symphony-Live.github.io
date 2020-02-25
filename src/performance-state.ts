import { Container, Application } from "pixi.js";
import ClickTrack from 'click-track';
import State from "./state";
import { InteractiveInstrument } from "./interactive-instrument";
import { Instrument } from "./types/instruments";
import { Draggable } from "./dragable";
import { Interactive } from "./interactive";
import mainTrack from "./tracks/main/";

type InstrumentTrack = {
  name: Instrument,
  color: number,
  cues: Array<[number, number]>
}

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
  protected interactives: Array<Interactive>;
  private app: Application;

  async createContainer(app: Application): Promise<Container> {
    this.app = app;

    const container = new Container();

    const {interactives, trackUrl} = mainTrack();

    const track: HTMLAudioElement = new Audio(trackUrl);
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

    const interactivesContainer = new Container();
    container.addChild(interactivesContainer);

    this.interactives = interactives;

    this.interactives.forEach((s1) => {
      s1.interactive = true;
      interactivesContainer.addChild(s1);
    });

    // Create some draggables
    for (let i = 0; i < 5; i++) {
      const dragCircle = new Draggable();
      dragCircle.setOrigin(window.innerWidth / 2 + (i - 2) * 64, window.innerHeight * 3 / 4 + 100);
      container.addChild(dragCircle);
      dragCircle.on("dragged", this.onCircleDrag.bind(this, interactivesContainer));
    }

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

  onCircleDrag(container: Container, e: PIXI.interaction.InteractionEvent) {
    if (this.app) {
      const i = this.app.renderer.plugins.interaction.hitTest(e.data.global, container);
      if (i && i instanceof InteractiveInstrument) {
        i.onDrop(e);
      }
    }
  }

  onTick() {
    for (let i = 0; i < this.interactives.length; i++) {
      this.interactives[i].onTick();
    }
  }

  onResize(size: { width: number, height: number }) {
    const multiplier = (size.height - 50) * 3 / 40;
    this.interactives.forEach((s1) => {
      s1.multiplierResize(multiplier);
      s1.position.set(window.innerWidth / 2, window.innerHeight * 3 / 4);
    });
  }

  async cleanUp() {

  }

}
import { InteractiveInstrument } from "../../interactive-instrument";
import { interactives } from "./track-interactives";
//import { particles } from './track-particles';
import { InteractiveTrack } from "../../types/interactive-track";
import fullSong from '../../../assets/video/film.mp4';

export default function (): InteractiveTrack {
  return {
    interactives: interactives.map((i) => {
      const o = new InteractiveInstrument(i.color, i.graphicsPath);
      o.cues = i.cues;
      o.name = i.name;
      return o;
    }),
    stageSize: [787, 203],
    stageCenter: [787 / 2, 203],
    particleCues: [],//particles,
    trackUrl: fullSong,
    tempo: 148,
    offset: 5.013 - 4.917, // start of violin, and 4.917 is "magic number"
  }
}

import { InteractiveInstrument } from "../../interactive-instrument";
import { interactives } from "./track-interactives";
import { particles } from './track-particles';
import { InteractiveTrack } from "../../types/interactive-track";
import fullSong from '../../../assets/music/full-composition.ogg';

export default function (): InteractiveTrack {
  return {
    interactives: interactives.map((i) => {
      const o = new InteractiveInstrument(i.color, i.graphicsPath);
      o.cues = i.cues;
      o.name = i.name;
      // SVG group size: 828 131.65
      // Set instrument position to SVG group center
      o.position.set(-414, -131.65);
      return o;
    }),
    particleCues: particles,
    trackUrl: fullSong,
    tempo: 148,
    offset: -0.2,
  }
}

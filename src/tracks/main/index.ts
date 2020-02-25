import { InteractiveInstrument } from "../../interactive-instrument";
import { interactives } from "./interactives";
import { InteractiveTrack } from "../../types/interactive-track";
import fullSong from '../../../assets/music/full-composition.ogg';

export default function (): InteractiveTrack {
  return {
    interactives: interactives.map((i) => {
      // i.name
      return new InteractiveInstrument(i.color, i.sA, i.eA, i.sR, i.eR)
    }),
    trackUrl: fullSong,
    tempo: 148,
    offset: -0.2,
  }
}

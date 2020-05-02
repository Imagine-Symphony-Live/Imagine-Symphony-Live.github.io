import { Instrument } from "../../types/instruments";
import { hslToRgb } from "../../color-utils";
import { InstrumentState } from "../../interactive-instrument";

import violinsGraphics from '../../../assets/images/instrumentsection.svg?path=g#violins path&svg-path-as-graphics';
import percussionGraphics from '../../../assets/images/instrumentsection.svg?path=g#percussion path&svg-path-as-graphics';
import timpaniGraphics from '../../../assets/images/instrumentsection.svg?path=g#timpani path&svg-path-as-graphics';
import brassGraphics from '../../../assets/images/instrumentsection.svg?path=g#brass path&svg-path-as-graphics';
import woodwindsGraphics from '../../../assets/images/instrumentsection.svg?path=g#woodwinds path&svg-path-as-graphics';
import cello_1Graphics from '../../../assets/images/instrumentsection.svg?path=g#cello-1 path&svg-path-as-graphics';
import cello_2Graphics from '../../../assets/images/instrumentsection.svg?path=g#cello-2 path&svg-path-as-graphics';
import bassGraphics from '../../../assets/images/instrumentsection.svg?path=g#bass path&svg-path-as-graphics';
import violasGraphics from '../../../assets/images/instrumentsection.svg?path=g#violas path&svg-path-as-graphics';

function m2b(measure: number, beat: number): number {
  return (measure - 1) * 6 + (beat - 1)
}

function countdown(cueAt: number, countIn: number): Array<[number, InstrumentState, number]> {
  const cues: Array<[number, InstrumentState, number]> = [];
  cues.push([cueAt - countIn, InstrumentState.CUE_READY, cueAt]);
  cues.push([cueAt, InstrumentState.HIT, 1]);
  //cues.push([cueAt + 1, InstrumentState.IDLE, 0]);
  return cues;
}

export const interactives: Array<{
  name: Instrument,
  graphicsPath: () => void,
  color: number,
  cues: Array<[number, InstrumentState, number]>
}> = [
    {
      name: "Cello",
      graphicsPath: cello_1Graphics,
      color: hslToRgb(Math.random(), 1, 0.5),
      cues: [
        ...countdown(m2b(6, 4), 12)
      ],
    },
    {
      name: "Viola",
      graphicsPath: violasGraphics,
      color: hslToRgb(Math.random(), 1, 0.5),
      cues: [
        ...countdown(m2b(7, 1.0), 12),
      ],
    },
    {
      name: "Bass",
      graphicsPath: bassGraphics,
      color: hslToRgb(Math.random(), 1, 0.5),
      cues: [],
    },
    {
      name: "Trumpet",
      graphicsPath: brassGraphics,
      color: hslToRgb(Math.random(), 1, 0.5),
      cues: [],
    },
    {
      name: "Timpani",
      graphicsPath: timpaniGraphics,
      color: hslToRgb(Math.random(), 1, 0.5),
      cues: [
        ...countdown(m2b(9, 6), 5)
      ],
    },
    // {
    //   name: "Harp",
    //   color: hslToRgb(Math.random(), 1, 0.5),
    //   sA: Math.PI * 14 / 18,
    //   eA: Math.PI * 15 / 18,
    //   sR: 8,
    //   eR: 10,
    //   cues: [
    //     ...countdown(m2b(11, 1), 6)
    //   ]
    // },
    {
      name: "Clarinet",
      graphicsPath: woodwindsGraphics,
      color: hslToRgb(Math.random(), 1, 0.5),
      cues: [
        //...countdown(m2b(15, 2.0), 12), // flute
        //...countdown(m2b(17, 1.0), 12), // bass clarinet
      ],
    },
    {
      name: "Violin",
      graphicsPath: violinsGraphics,
      color: hslToRgb(Math.random(), 1, 0.5),
      cues: [
        ...countdown(m2b(6, 1), 12),
        ...countdown(m2b(3, 1), 12),
        ...countdown(m2b(8, 2), 12),
      ],
    },
    // {
    //   name: "Piano",
    //   color: hslToRgb(Math.random(), 1, 0.5),
    //   sA: Math.PI * 5 / 6,
    //   eA: Math.PI,
    //   sR: 7,
    //   eR: 10,
    //   cues: [
    //     ...countdown(m2b(4, 4), 12)
    //   ],
    // },
  ];
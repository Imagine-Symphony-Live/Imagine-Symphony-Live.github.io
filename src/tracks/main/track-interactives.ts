import { Instrument } from "../../types/instruments";
import { hslToRgb } from "../../color-utils";
import { InstrumentState } from "../../interactive-instrument";

import bassGraphics from '../../../assets/images/instrumentsection.svg?path=path#bass&svg-path-as-graphics';
import brassGraphics from '../../../assets/images/instrumentsection.svg?path=path#brass&svg-path-as-graphics';
import celloGraphics from '../../../assets/images/instrumentsection.svg?path=path#cello&svg-path-as-graphics';
import harpGraphics from '../../../assets/images/instrumentsection.svg?path=path#harp&svg-path-as-graphics';
import hornGraphics from '../../../assets/images/instrumentsection.svg?path=path#horn&svg-path-as-graphics';
import percussionGraphics from '../../../assets/images/instrumentsection.svg?path=path#percussion&svg-path-as-graphics';
import pianoGraphics from '../../../assets/images/instrumentsection.svg?path=path#piano&svg-path-as-graphics';
import violaGraphics from '../../../assets/images/instrumentsection.svg?path=path#viola&svg-path-as-graphics';
import violin_1Graphics from '../../../assets/images/instrumentsection.svg?path=path#violin-1&svg-path-as-graphics';
import violin_2Graphics from '../../../assets/images/instrumentsection.svg?path=path#violin-2&svg-path-as-graphics';
import woodwindGraphics from '../../../assets/images/instrumentsection.svg?path=path#woodwind&svg-path-as-graphics';
import { parts } from './score-export.json';

// P1: Flute 1, 2
// P2: Oboe
// P3: English Horn (Optional)
// P4: Clarinet in Bb 1, 2
// P5: Bass Clarinet
// P6: Bassoon 1, 2
// P7: Contrabassoon (Optional)
// P8: Horn in F 1, 2
// P9: Horn in F 3 (&amp; 4)
// P10: Trumpet in Bb 1, 2
// P11: Trumpet in Bb 3
// P12: Trombone
// P13: Bass Trombone
// P14: Cimbasso (sub. Tuba or C.B Trombone)
// P15: Timpani
// P16: Cymbals
// P17: Tamtam
// P18: Electric Piano (Pre-Record)
// P19: Piano (Optional)
// P20: Celesta (Optioanl)
// P21: Harp
// P22: Soprano (Optional)
// P23: Alto (Optional)
// P24: Solo Violin I
// P25: Solo  Violin II
// P26: Solo Viola
// P27: Solo Cello
// P28: Violin I
// P29: Violin 1 DIV
// P30: Violin II
// P31: Violin II DIV
// P32: Viola
// P33: Viola DIV
// P34: Cello
// P35: Cello DIV
// P36: Double Bass

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

type notes = ({
  note: number;
  pitch?: number | null;
  words?: string;
})[];

function getSoloCues(notes: notes): Array<[number, InstrumentState, number]> {
  const res = notes
  .filter(({ words = ''}) => /solo|cue/.test(words))
  .map(({note}) => note)
  .map((note) => countdown(note, 12))
  .reduce((acc, arr) => [...acc, ...arr], []);
  res.sort(([a],[b]) => Math.sign(a - b));
  return res;
}

export const interactives: Array<{
  name: string,
  graphicsPath: () => void,
  color: number,
  cues: Array<[number, InstrumentState, number]>
}> = [
  {
    name: "cello",
    graphicsPath: celloGraphics,
    color: 0xffffff,
    cues: getSoloCues([
      ...parts.P34.notes, // Cello
      ...parts.P35.notes // Cell div
    ]),
  },
  {
    name: "bass",
    graphicsPath: bassGraphics,
    color: 0xffffff,
    cues: getSoloCues([
      ...parts.P36.notes // Double bass
    ]),
  },
  {
    name: "brass",
    graphicsPath: brassGraphics,
    color: 0xffffff,
    cues: getSoloCues([
      ...parts.P10.notes, // Trumpet in Bb 1, 2
      ...parts.P11.notes, // Trumpet in Bb 3
      ...parts.P12.notes, // Trombone
      ...parts.P13.notes, // Bass Trombone
      ...parts.P14.notes, // Cimbasso (sub. Tuba or C.B Trombone)
    ]),
  },
  {
    name: "harp",
    graphicsPath: harpGraphics,
    color: 0xffffff,
    cues: getSoloCues([
      ...parts.P21.notes, // Harp
    ]),
  },
  {
    name: "horn",
    graphicsPath: hornGraphics,
    color: 0xffffff,
    cues: getSoloCues([
      ...parts.P8.notes, // Horn in F 1, 2
      ...parts.P9.notes, // Horn in F 3 (&amp; 4)
    ]),
  },
  {
    name: "percussion",
    graphicsPath: percussionGraphics,
    color: 0xffffff,
    cues: getSoloCues([
      ...parts.P15.notes, // Timpani
      ...parts.P16.notes, // Cymbals
      ...parts.P17.notes, // Tamtam
    ]),
  },
  {
    name: "piano",
    graphicsPath: pianoGraphics,
    color: 0xffffff,
    cues: getSoloCues([
      ...parts.P18.notes, // Electric Piano (Pre-Record)
      ...parts.P19.notes, // Piano (Optional)
    ]),
  },
  {
    name: "viola",
    graphicsPath: violaGraphics,
    color: 0xffffff,
    cues: getSoloCues([
      ...parts.P26.notes, // Solo Viola
      ...parts.P32.notes, // Viola
      ...parts.P33.notes, // Viola DIV
    ]),
  },
  {
    name: "violin_1",
    graphicsPath: violin_1Graphics,
    color: 0xffffff,
    cues: getSoloCues([
      ...parts.P24.notes, // Solo Violin I
      ...parts.P28.notes, // Violin I
      ...parts.P29.notes, // Violin 1 DIV
    ]),
  },
  {
    name: "violin_2",
    graphicsPath: violin_2Graphics,
    color: 0xffffff,
    cues: getSoloCues([
      ...parts.P25.notes, // Solo  Violin II
      ...parts.P30.notes, // Violin II
      ...parts.P31.notes, // Violin II DIV
    ]),
  },
  {
    name: "woodwind",
    graphicsPath: woodwindGraphics,
    color: 0xffffff,
    cues: getSoloCues([
      ...parts.P1.notes, // Flute 1, 2
      ...parts.P2.notes, // Oboe
      ...parts.P4.notes, // Clarinet in Bb 1, 2
      ...parts.P5.notes, // Bass Clarinet
      ...parts.P6.notes, // Bassoon 1, 2
      ...parts.P7.notes, // Contrabassoon (Optional)
    ]),
  },
];
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

import bassIcon from '../../../assets/images/instrument-icons/insicon_bass.svg';
import brassIcon from '../../../assets/images/instrument-icons/insicon_brass.svg';
import celloIcon from '../../../assets/images/instrument-icons/insicon_cello.svg';
import choirIcon from '../../../assets/images/instrument-icons/insicon_choir.svg';
import clarinetIcon from '../../../assets/images/instrument-icons/insicon_clarinet.svg';
import cymbalsIcon from '../../../assets/images/instrument-icons/insicon_cymbals.svg';
import fluteIcon from '../../../assets/images/instrument-icons/insicon_flute.svg';
import gongIcon from '../../../assets/images/instrument-icons/insicon_gong.svg';
import harpIcon from '../../../assets/images/instrument-icons/insicon_harp.svg';
import hornIcon from '../../../assets/images/instrument-icons/insicon_horn.svg';
import keyboardIcon from '../../../assets/images/instrument-icons/insicon_keyboard.svg';
import oboeIcon from '../../../assets/images/instrument-icons/insicon_oboe.svg';
import percussionsectionIcon from '../../../assets/images/instrument-icons/insicon_percussionsection.svg';
import stringIcon from '../../../assets/images/instrument-icons/insicon_string.svg';
import synthIcon from '../../../assets/images/instrument-icons/insicon_synth.svg';
import tamtamIcon from '../../../assets/images/instrument-icons/insicon_tamtam.svg';
import timpaniIcon from '../../../assets/images/instrument-icons/insicon_timpani.svg';
import trumpetIcon from '../../../assets/images/instrument-icons/insicon_trumpet.svg';
import woodwindIcon from '../../../assets/images/instrument-icons/insicon_woodwind.svg';

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

function countdown(cueAt: number, countIn: number, spriteUrl: string, playNotes: number[]): Array<[number, InstrumentState, any]> {
  const cues: Array<[number, InstrumentState, any]> = [];
  cues.push([cueAt - countIn, InstrumentState.CUE_READY, spriteUrl]);
  cues.push([cueAt, InstrumentState.HIT, playNotes]);
  return cues;
}

type notes = ({
  note: number;
  pitch?: number | null;
  words?: string;
})[];

const getSoloCues = (spriteUrl: string) => (notes: notes): Array<[number, InstrumentState, any]> => {
  const res = notes
    .filter(({ words = '' }) => /solo|cue/.test(words))
    .map(({ note }) => note)
    .map((note, i, arr) => {
      // Round to start of a measure
      let countIn = 12;
      countIn = note - Math.floor((note - countIn) / 6) * 6;
      // Make sure it's after last note though
      if (i > 0 && note > arr[i - 1]) {
        // Would the cue-in occur before the last cue?
        if (note - countIn < arr[i - 1]) {
          countIn = note - arr[i - 1] - 3;
        }
      }
      // Can't ever be smaller than 1 beat
      if (countIn < 1) {
        throw new Error(`countIn cannot be less than 1`);
      }

      // get notes about to be played
      // get the first one
      // stop using notes if there is a 12 note gap
      // @TODO also stop if the next note is a cue/solo
      const playNotes: number[] = [];
      for (let ii = i;
        ii === i || (
          ii < arr.length
          && arr[ii] - arr[ii - 1] < 12
        );
      ii++) {
        playNotes.push(arr[ii]);
      }

      return countdown(note, countIn, spriteUrl, playNotes);
    })
    .reduce((acc, arr) => [...acc, ...arr], []);
  res.sort(([a], [b]) => Math.sign(a - b));
  return res;
}

export const interactives: Array<{
  name: string,
  graphicsPath: () => void,
  color: number,
  cues: Array<[number, InstrumentState, any]>
}> = [
    {
      name: "cello",
      graphicsPath: celloGraphics,
      color: 0xaaaaaa,
      cues: getSoloCues(celloIcon)([
        ...parts.P34.notes, // Cello
        ...parts.P35.notes // Cell div
      ]),
    },
    {
      name: "bass",
      graphicsPath: bassGraphics,
      color: 0xaaaaaa,
      cues: getSoloCues(bassIcon)([
        ...parts.P36.notes // Double bass
      ]),
    },
    {
      name: "brass",
      graphicsPath: brassGraphics,
      color: 0xffffff,
      cues: [
        ...getSoloCues(trumpetIcon)(parts.P10.notes), // Trumpet in Bb 1, 2
        ...getSoloCues(trumpetIcon)(parts.P11.notes), // Trumpet in Bb 3
        ...getSoloCues(brassIcon)(parts.P12.notes), // Trombone
        ...getSoloCues(brassIcon)(parts.P13.notes), // Bass Trombone
        ...getSoloCues(brassIcon)(parts.P14.notes), // Cimbasso (sub. Tuba or C.B Trombone)
      ],
    },
    {
      name: "harp",
      graphicsPath: harpGraphics,
      color: 0xaaaaaa,
      cues: getSoloCues(harpIcon)([
        ...parts.P21.notes, // Harp
      ]),
    },
    {
      name: "horn",
      graphicsPath: hornGraphics,
      color: 0xaaaaaa,
      cues: getSoloCues(hornIcon)([
        ...parts.P8.notes, // Horn in F 1, 2
        ...parts.P9.notes, // Horn in F 3 (&amp; 4)
      ]),
    },
    {
      name: "percussion",
      graphicsPath: percussionGraphics,
      color: 0xffffff,
      cues: [
        ...getSoloCues(timpaniIcon)(parts.P15.notes), // Timpani
        ...getSoloCues(cymbalsIcon)(parts.P16.notes), // Cymbals
        ...getSoloCues(tamtamIcon)(parts.P17.notes), // Tamtam
      ],
    },
    {
      name: "piano",
      graphicsPath: pianoGraphics,
      color: 0xaaaaaa,
      cues: getSoloCues(keyboardIcon)([
        ...parts.P18.notes, // Electric Piano (Pre-Record)
        ...parts.P19.notes, // Piano (Optional)
      ]),
    },
    {
      name: "viola",
      graphicsPath: violaGraphics,
      color: 0xffffff,
      cues: getSoloCues(stringIcon)([
        ...parts.P26.notes, // Solo Viola
        ...parts.P32.notes, // Viola
        ...parts.P33.notes, // Viola DIV
      ]),
    },
    {
      name: "violin_1",
      graphicsPath: violin_1Graphics,
      color: 0xffffff,
      cues: getSoloCues(stringIcon)([
        ...parts.P24.notes, // Solo Violin I
        ...parts.P28.notes, // Violin I
        ...parts.P29.notes, // Violin 1 DIV
      ]),
    },
    {
      name: "violin_2",
      graphicsPath: violin_2Graphics,
      color: 0xaaaaaa,
      cues: getSoloCues(stringIcon)([
        ...parts.P25.notes, // Solo  Violin II
        ...parts.P30.notes, // Violin II
        ...parts.P31.notes, // Violin II DIV
      ]),
    },
    {
      name: "woodwind",
      graphicsPath: woodwindGraphics,
      color: 0xffffff,
      cues: [
        ...getSoloCues(fluteIcon)(parts.P1.notes), // Flute 1, 2
        ...getSoloCues(oboeIcon)(parts.P2.notes), // Oboe
        ...getSoloCues(clarinetIcon)(parts.P4.notes), // Clarinet in Bb 1, 2
        ...getSoloCues(clarinetIcon)(parts.P5.notes), // Bass Clarinet
        ...getSoloCues(clarinetIcon)(parts.P6.notes), // Bassoon 1, 2
        ...getSoloCues(clarinetIcon)(parts.P7.notes), // Contrabassoon (Optional)
      ],
    },
  ];
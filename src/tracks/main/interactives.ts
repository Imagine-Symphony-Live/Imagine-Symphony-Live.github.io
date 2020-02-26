import { Instrument } from "../../types/instruments";
import { hslToRgb } from "../../color-utils";
import { InstrumentState } from "../../interactive-instrument";

function m2b(measure: number, beat: number): number {
  return (measure - 1) * 6 + (beat - 1)
}

function countdown(cueAt: number, countIn: number, interval: number = 1): Array<[number, InstrumentState]> {
  const cues: Array<[number, InstrumentState]> = [];
  for (let i = 0; i < countIn; i += 1) {
    if(countIn - i >= 3) {
      cues.push([cueAt - i * interval, InstrumentState.count1]);
    } else if(countIn - i == 2) {
      cues.push([cueAt - i * interval, InstrumentState.count2]);
    } else if(countIn - i == 1) {
      cues.push([cueAt - i * interval, InstrumentState.count3]);
    }
  }
  cues.push([cueAt, InstrumentState.hit]);
  return cues;
}

export const interactives: Array<{
  name: Instrument,
  color: number,
  sA: number,
  eA: number,
  sR: number,
  eR: number,
  cues: Array<[number, InstrumentState]>
}> = [
    {
      name: "Cello",
      color: hslToRgb(Math.random(), 1, 0.5),
      sA: 0,
      eA: Math.PI / 6,
      sR: 3,
      eR: 7,
      cues: [],
    },
    {
      name: "Viola",
      color: hslToRgb(Math.random(), 1, 0.5),
      sA: Math.PI / 6,
      eA: Math.PI * 2 / 6,
      sR: 3,
      eR: 7,
      cues: [
        ...countdown(m2b(25, 1.0), 3),
      ],
    },
    {
      name: "Bass",
      color: hslToRgb(Math.random(), 1, 0.5),
      sA: 0,
      eA: Math.PI * 2 / 6,
      sR: 7,
      eR: 10,
      cues: [],
    },
    {
      name: "Trumpet",
      color: hslToRgb(Math.random(), 1, 0.5),
      sA: Math.PI * 2 / 6,
      eA: Math.PI * 10 / 18,
      sR: 8,
      eR: 10,
      cues: [],
    },
    {
      name: "Timpani",
      color: hslToRgb(Math.random(), 1, 0.5),
      sA: Math.PI * 10 / 18,
      eA: Math.PI * 11 / 18,
      sR: 8,
      eR: 10,
      cues: [],
    },
    {
      name: "Xylophone",
      color: hslToRgb(Math.random(), 1, 0.5),
      sA: Math.PI * 11 / 18,
      eA: Math.PI * 5 / 6,
      sR: 8,
      eR: 10,
      cues: [],
    },
    {
      name: "Clarinet",
      color: hslToRgb(Math.random(), 1, 0.5),
      sA: Math.PI * 2 / 6,
      eA: Math.PI * 4 / 6,
      sR: 3,
      eR: 8,
      cues: [
        ...countdown(m2b(15, 2.0), 3), // flute
        ...countdown(m2b(17, 1.0), 3), // bass clarinet
      ],
    },
    {
      name: "Violin",
      color: hslToRgb(Math.random(), 1, 0.5),
      sA: Math.PI * 4 / 6,
      eA: Math.PI * 5 / 6,
      sR: 3,
      eR: 8,
      cues: [],
    },
    {
      name: "Violin",
      color: hslToRgb(Math.random(), 1, 0.5),
      sA: Math.PI * 5 / 6,
      eA: Math.PI,
      sR: 3,
      eR: 10,
      cues: [],
    },
  ];
import { Instrument } from "../../types/instruments";
import { hslToRgb } from "../../color-utils";

export const interactives: Array<{
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
  ];
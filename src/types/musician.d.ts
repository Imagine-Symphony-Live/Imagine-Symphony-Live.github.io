import { Instrument } from "./instruments";

export interface Musician {
  name: string,
  date: Date,
  instrument: Instrument,
  biography?: string,
  video?: string,
}
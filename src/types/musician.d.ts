import { Instrument } from "./instruments";

type DateRange = {
  from: Date;
  to?: Date;
}

export type BasicPerson = {
  name: string;
}

export type Biography = BasicPerson & {
  donorLevel?: "donor";
  bioText?: string;
  video?: string;
  photo?: string;
}

export type Musician = Biography & {
  instrument: Instrument;
  dates?: DateRange;
  whichSymphony: string;
}
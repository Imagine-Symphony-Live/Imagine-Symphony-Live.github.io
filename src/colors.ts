import { Instrument } from "./types/instruments";

export const INSTRUMENT_COLORS: {[key in Instrument]?: number} = {
  Cello: 0xee5500,
  Timpani: 0x0055ff,
}

export const DEFAULT_INSTRUMENT_COLOR = 0x1111ff;
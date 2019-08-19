import { Instrument } from "./types/instruments";

export const INSTRUMENT_COLORS: {[key in Instrument]?: number} = {
  ["Violin"]: 0xaa4444,
  ["Viola"]: 0xaa4444,
  ["Cello"]: 0xaa4444,
  ["Bass"]: 0xaa4444,
  ["Harp"]: 0xaa4444,

  ["Flute"]: 0xaaaa44,
  ["Piccolo"]: 0xaaaa44,
  ["Oboe"]: 0xaaaa44,
  ["English Horn"]: 0xaaaa44,
  ["Clarinet"]: 0xaaaa44,
  ["Basset Horn"]: 0xaaaa44,
  ["Bass Clarinet"]: 0xaaaa44,
  ["Bassoon"]: 0xaaaa44,
  ["Double Bassoon"]: 0xaaaa44,
  ["Saxophone"]: 0xaaaa44,

  ["French Horn"]: 0xccee66,
  ["Trumpet"]: 0xccee66,
  ["Cornet"]: 0xccee66,
  ["Slide Trombone"]: 0xccee66,
  ["Tuba"]: 0xccee66,

  ["Timpani"]: 0x7700ee,
  ["Bass Drum"]: 0x7700ee,
  ["Snare Drum"]: 0x7700ee,
  ["Chimes"]: 0x7700ee,
  ["Cymbals"]: 0x7700ee,
  ["Gong"]: 0x7700ee,
  ["Triangle"]: 0x7700ee,
  ["Glockenspiel"]: 0x7700ee,
  ["Xylophone"]: 0x7700ee,
  ["Castanets"]: 0x7700ee,
  ["Tambourine"]: 0x7700ee,
}

export const DEFAULT_INSTRUMENT_COLOR = 0x1111ff;
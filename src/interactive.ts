import { Container } from "pixi.js";

export abstract class Interactive extends Container {
  // beat, state, value
  cues: Array<[number, number, number]> = [];
  name: string = "";
  abstract multiplierResize(multiplier: number): void;
  abstract onTick(beat: number): void;
  abstract onCue(cue: number, state: number, value: number): void;
}
import { Container } from "pixi.js";

export abstract class Interactive extends Container {
  cues: Array<[number, number]> = [];
  name: string = "";
  abstract multiplierResize(multiplier: number): void;
  abstract onTick(): void;
  abstract onCue(cue: number, state: number): void;
}
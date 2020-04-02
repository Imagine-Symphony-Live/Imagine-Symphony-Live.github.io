import { Container } from "pixi.js";

export abstract class Interactive extends Container {
  // beat, state, value
  cues: Array<[number, number, number]> = [];
  name: string = "";
  protected dragHover: boolean = false;
  abstract multiplierResize(multiplier: number): void;
  abstract onTick(beat: number): void;
  abstract setState(newState: number, value: number): void;
  onCue(cue: number, state: number, value: number) {
    this.setState(state, value);
  }

  onDragOver(e: PIXI.interaction.InteractionEvent) {
    this.dragHover = true;
  }

  onDragOut(e: PIXI.interaction.InteractionEvent) {
    this.dragHover = false;
  }

  constructor() {
    super();
    this.interactive = true;
    this.on("mousedragover", this.onDragOver.bind(this));
    this.on("mousedragout", this.onDragOut.bind(this));
  }

}
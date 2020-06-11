import { Container } from "pixi.js";

export abstract class Interactive extends Container {
  // beat, state, value
  cues: Array<[number, number, number]> = [];
  name: string = "";
  protected stateFade = 0;
  protected stateFadeTime = 1;
  protected dragHover: boolean = false;
  abstract multiplierResize(multiplier: number): void;
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

  onTick(currentBeat: number, deltaBeat: number) {
    if(this.stateFade < 1) {
      this.stateFade += this.stateFadeTime * deltaBeat;
      if(this.stateFade > 1) {
        this.stateFade = 1;
      }
    }
  }

  constructor() {
    super();
  }

}
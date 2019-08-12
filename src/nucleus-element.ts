import { Container, Graphics } from "pixi.js";
import { Instrument } from "./types/instruments";

const NUCLEUS_RADIUS = 128;

export class NucleusElement extends Container {
  public activeInstruments: Array<Instrument> = [];
  private graphics: Graphics = new Graphics();
  constructor() {
    super();
    this.addChild(this.graphics);
    this.draw();
  }

  activateInstrument(i: Instrument) {
    if(this.activeInstruments.indexOf(i) !== -1) {
      return;
    }

    this.activeInstruments.push(i);
    this.draw();
  }

  draw() {
    this.graphics.clear();
    this.graphics.beginFill(0xee8888);
    this.graphics.lineStyle(5,0xee8888)
    this.graphics.drawCircle(0,0,NUCLEUS_RADIUS);
    this.graphics.endFill();
  }
}
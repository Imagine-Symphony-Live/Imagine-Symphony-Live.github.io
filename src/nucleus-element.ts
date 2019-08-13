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
    this.graphics.beginFill(0xffffff, )
    drawCircleSin(this.graphics, 0, 0, NUCLEUS_RADIUS);
  }
}

function drawCircleSin(graphics: Graphics, x: number, y: number, radius: number) {

  graphics.lineStyle(1,0xee8888);
  graphics.drawCircle(0,0,NUCLEUS_RADIUS);
  graphics.beginFill(0x8888ee);
  //graphics.lineStyle(2,0x8888ee);
  const interval = Math.PI / 1200;
  let cx = 0;
  let cy = 0;
  for (let i = 0; i < Math.PI*2 + interval; i+=interval) {
    const magnitude = radius + Math.sin((i * 20)) * 20 * Math.abs(Math.sin( Math.PI / 2 + i / 2));
    cx = Math.cos(i) * magnitude;
    cy = Math.sin(i) * magnitude;
    if(i !== 0) {
      graphics.lineTo(cx + x, cy + y);
    } else {
      graphics.moveTo(cx + x, cy + y);
    }
  }
  graphics.endFill();
}
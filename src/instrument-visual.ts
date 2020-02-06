import { Container, Graphics } from "pixi.js";

const RADIUS = 32;
const LINE_THICK = 3;

enum InstrumentState {
  hit,
  sustain,
  damp,
  silent,
}

export class InstrumentVisual extends Container {
  private graphics: Graphics = new Graphics();

  //public ramp: number = 0.5;
  public decay: number = 0.3;
  public volume: number = 0;
  private state: InstrumentState = InstrumentState.damp;
  private sustainTimer: number = -1;
  public vibrato: number = 0.05;

  constructor(public tempo: number = 60, public color: number = 0x000000, public ramp: number = 1) {
    super();

    this.draw();
    this.addChild(this.graphics);

  }

  volumeUpdate(volume: number) {
    this.graphics.alpha = 0.5 + volume / 2;
    this.graphics.scale.set(0.5 + volume);
  }

  note(noteLength: number) {
    if(this.sustainTimer != -1) {
      clearTimeout(this.sustainTimer);
    }

    this.volume = 0;

    this.state = InstrumentState.hit;
    this.sustainTimer = setTimeout(this.sustainTimeout.bind(this), 1000 * noteLength * (60 / this.tempo));
  }

  sustainTimeout() {
    this.state = InstrumentState.damp;
    this.sustainTimer = -1;
  }

  render(render: PIXI.Renderer) {
    super.render(render);

    if(this.state !== InstrumentState.silent) {
      switch(this.state) {
        case InstrumentState.hit:
          this.volume += this.ramp;
          if(this.volume >= 1) {
            this.state = InstrumentState.sustain;
          }
          break;
        case InstrumentState.sustain:
          //this.volume
          this.volume = 1 + (Math.sin(Date.now()) - 1) * 0.5 * this.vibrato;
          break;
        case InstrumentState.damp:
          this.volume -= this.decay;
          if(this.volume <= 0) {
            this.state = InstrumentState.silent;
          }
          break;
      }

      this.volume = Math.min(1, Math.max(0, this.volume));
      this.volumeUpdate(this.volume);
    }
  }

  draw() {
    this.graphics.clear();
    this.graphics.beginFill(this.color, 0.9);
    this.graphics.drawCircle(0, 0, RADIUS);
    this.graphics.lineStyle(LINE_THICK, this.color, 1, 0);
    this.graphics.endFill();
  }



}
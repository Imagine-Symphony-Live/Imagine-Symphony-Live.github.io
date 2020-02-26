import { Draggable } from "./dragable";

const beatsToOrigin = 6;

export class Fermata extends Draggable {
  private dragBeat: number = 0;
  private timeFromDrag: number = 0;
  private dragFromY: number = 0;

  private _value = 0;

  constructor() {
    super();

  }

  onDragEnd(e: PIXI.interaction.InteractionEvent) {
    this.dragging = false;
    this.graphics.off('pointermove', this.onDragMove.bind(this));
    this.emit("dragged", e);
    //this.position.set(this.origin.x, this.origin.y);
  }

  onDragMove(e: PIXI.interaction.InteractionEvent) {
    if (this.dragging)
    {
      const newPosition = e.data.getLocalPosition(this.parent);
      //this.position.x = newPosition.x;
      this.position.y = newPosition.y;
      this.dragFromY = this.position.y;
    }
  }

  private calcValue() {
    this._value = Math.min(1, Math.abs(this.position.y - this.origin.y) / window.innerHeight)
  }

  get value() {
    return this._value;
  }

  onTick(currentBeat: number) {
    if(this.dragging) {
      this.dragBeat = currentBeat;
      this.timeFromDrag = 0;
      this.calcValue();
    } else if(this.timeFromDrag < beatsToOrigin) {
      this.timeFromDrag = currentBeat - this.dragBeat;
      if(this.timeFromDrag >= beatsToOrigin) {
        this.position.set(this.origin.x, this.origin.y);
      } else {
        const factor = 1 - (this.timeFromDrag / beatsToOrigin);
        this.position.set(this.origin.x, (this.dragFromY - this.origin.y) * factor + this.origin.y);
      }
      this.calcValue();
    }
  }

}
import { Graphics, Point } from "pixi.js";
import { Interactive } from "./interactive";
import { DRAGGABLE_RADIUS } from "./constants";

export enum DraggableState {
  HIDDEN,
  VISIBLE,
}

export class Draggable extends Interactive {
  protected graphics: Graphics = new Graphics();
  protected dragging = false;
  public origin: Point = new Point();

  constructor() {
    super();
    this.graphics
      .clear()
      .beginFill(0xffffff, 0.5)
      .drawCircle(0, 0, DRAGGABLE_RADIUS)
      .endFill();
    this.addChild(this.graphics);

    this.graphics.interactive = true;
    this.graphics
      .on('pointerdown', this.onDragStart.bind(this))
      .on('pointerup', this.onDragEnd.bind(this))
      .on('pointerupoutside', this.onDragEnd.bind(this));
  }

  setOrigin(x: number, y: number) {
    this.origin.x = x;
    this.origin.y = y;
    this.position.set(x, y);
  }

  onDragStart(e: PIXI.interaction.InteractionEvent) {
    this.dragging = true;
    this.emit("dragActive", this, e);
    this.graphics.on('pointermove', this.onDragMove.bind(this));
  }

  onDragEnd(e: PIXI.interaction.InteractionEvent) {
    this.dragging = false;
    this.emit("dragInactive", this, e);
    this.graphics.off('pointermove', this.onDragMove.bind(this));
    this.emit("dragged", this, e);
    this.position.set(this.origin.x, this.origin.y);
  }

  onDragMove(e: PIXI.interaction.InteractionEvent) {
    if (this.dragging)
    {
      const newPosition = e.data.getLocalPosition(this.parent);
      this.position.x = newPosition.x;
      this.position.y = newPosition.y;
    }
  }

  multiplierResize(multiplier: number) {
    //
  }

  onTick(beat: number) {
    //
  }

  setState(newState: DraggableState, value: number) {
    //
  }

}
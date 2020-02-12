import { Container, Graphics, Point } from "pixi.js";

export class Draggable extends Container{
  private graphics: Graphics = new Graphics();
  private dragging = false;
  public origin: Point = new Point();

  constructor() {
    super();
    this.graphics
      .clear()
      .beginFill(0xffffff, 0.5)
      .drawCircle(0, 0, 32)
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
    this.graphics.on('pointermove', this.onDragMove.bind(this));
  }

  onDragEnd(e: PIXI.interaction.InteractionEvent) {
    this.dragging = false;
    this.graphics.off('pointermove', this.onDragMove.bind(this));
    this.emit("dragged", e);
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

}
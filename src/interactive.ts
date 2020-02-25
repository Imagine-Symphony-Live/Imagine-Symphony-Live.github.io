import { Container } from "pixi.js";

export abstract class Interactive extends Container {
  abstract multiplierResize(multiplier: number): void;
  abstract onTick(): void;
}
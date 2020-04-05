import { Point } from "pixi.js";

export function linearLerp(from: number, to: number, t: number): number {
  return from + (to - from) * t;
}

export function linearLerpPoint(from: Point, to: Point, t: number): Point {
  return new Point(from.x + (to.x - from.x) * t, from.y + (to.y - from.y) * t);
}

export function powLerp(from: number, to: number, t: number, pow: number): number {
  const t2 = Math.pow(t, pow);
  return from + (to - from) * t2;
}

export function powLerpPoint(from: Point, to: Point, t: number, pow: number): Point {
  const t2 = Math.pow(t, pow);
  return new Point(from.x + (to.x - from.x) * t2, from.y + (to.y - from.y) * t2);
}
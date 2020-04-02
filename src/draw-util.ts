import { Graphics } from "pixi.js";

export function drawDoubleClosedArc(graphics: Graphics, startArc: number, endArc: number, startRadius: number, endRadius: number, steps: number = 100, overlapEnd = false) {

  const stepArc = (endArc - startArc) / steps;

  graphics.moveTo(Math.cos(startArc) * startRadius, -Math.sin(startArc) * startRadius);

  for(let i = startArc + stepArc; i <= endArc - stepArc; i += stepArc) {
    graphics.lineTo(Math.cos(i) * startRadius, -Math.sin(i) * startRadius);
  }

  graphics.lineTo(Math.cos(endArc) * startRadius, -Math.sin(endArc) * startRadius);
  graphics.lineTo(Math.cos(endArc) * endRadius, -Math.sin(endArc) * endRadius);

  for(let i = endArc - stepArc; i >= startArc + stepArc; i -= stepArc) {
    graphics.lineTo(Math.cos(i) * endRadius, -Math.sin(i) * endRadius);
  }

  graphics.lineTo(Math.cos(startArc) * endRadius, -Math.sin(startArc) * endRadius);
  graphics.lineTo(Math.cos(startArc) * startRadius, -Math.sin(startArc) * startRadius);

  if(overlapEnd) {
    graphics.lineTo(Math.cos(startArc + stepArc) * startRadius, -Math.sin(startArc + stepArc) * startRadius);
  }

}
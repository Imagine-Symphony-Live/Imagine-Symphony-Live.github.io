import { Graphics } from "pixi.js";

export function drawDoubleClosedArc(graphics: Graphics, startArc: number, endArc: number, startRadius: number, endRadius: number, steps: number = 100, overlapEnd = false, yScale = 1) {

  const stepArc = (endArc - startArc) / steps;

  graphics.moveTo(Math.cos(startArc) * startRadius, -Math.sin(startArc) * startRadius * yScale);

  for(let i = startArc + stepArc; i <= endArc - stepArc; i += stepArc) {
    graphics.lineTo(Math.cos(i) * startRadius, -Math.sin(i) * startRadius * yScale);
  }

  graphics.lineTo(Math.cos(endArc) * startRadius, -Math.sin(endArc) * startRadius * yScale);
  graphics.lineTo(Math.cos(endArc) * endRadius, -Math.sin(endArc) * endRadius * yScale);

  for(let i = endArc - stepArc; i >= startArc + stepArc; i -= stepArc) {
    graphics.lineTo(Math.cos(i) * endRadius, -Math.sin(i) * endRadius * yScale);
  }

  graphics.lineTo(Math.cos(startArc) * endRadius, -Math.sin(startArc) * endRadius * yScale);
  graphics.lineTo(Math.cos(startArc) * startRadius, -Math.sin(startArc) * startRadius * yScale);

  if(overlapEnd) {
    graphics.lineTo(Math.cos(startArc + stepArc) * startRadius, -Math.sin(startArc + stepArc) * startRadius * yScale);
  }

}
import './css/styles.css';
import { Application } from 'pixi.js';
import { BioElement } from './bio-element';
import { Musician } from './types/musician';
import { Viewport } from 'pixi-viewport'

window.onload = (): void => {

  const app = new Application(  {
    antialias: true,
    transparent: false,
    autoDensity: true,
    resolution: 2, // TODO: auto
    resizeTo: window,
    backgroundColor: 0xffffff,
  });

  const viewport = new Viewport({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    worldWidth: 1000,
    worldHeight: 1000,
    interaction: app.renderer.plugins.interaction,
  });

  document.body.appendChild(app.view);

  app.stage.addChild(viewport);

  viewport
    .drag()
    .pinch()
    .wheel()
    //.decelerate();

  const musicians: Array<Musician> = [
    {
      name: "Evan Sigvaldsen",
      date: new Date(),
      instrument: "Cello"
    },
    {
      name: "Chris Thomas",
      date: new Date(),
      instrument: "Cello"
    },
    {
      name: "Dustin Woods",
      date: new Date(),
      instrument: "Timpani"
    }
  ]

  musicians.forEach((m) => {
    const e = new BioElement(m);
    viewport.addChild(e);
    e.position.set(100 + Math.random()* 600,100 + Math.random()* 600);
  });

  // Main loop
  app.ticker.add(() => {

  });

};
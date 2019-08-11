import './css/styles.css';
import { Application } from 'pixi.js';
import { BioElement } from './bio-element';
import { Musician } from './types/musician';
import { Viewport } from 'pixi-viewport'
import { WORLD_WIDTH, WORLD_HEIGHT } from './constants';
import TWEEN from '@tweenjs/tween.js';

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
    worldWidth: WORLD_WIDTH,
    worldHeight: WORLD_HEIGHT,
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
  ];

  function unFocusAllExcept(allBios: Array<BioElement>, except: BioElement) {
    for (let i = 0; i < allBios.length; i++) {
      if(allBios[i] !== except) {
        allBios[i].unfocus();
      }
    }
  }

  const musicianBios = musicians.map((m) => new BioElement(m));
  musicianBios.forEach((b) => {
    b.on("focused", unFocusAllExcept.bind(null, musicianBios, b));
  });

  musicianBios.forEach((e) => {
    viewport.addChild(e);
    e.position.set(Math.random() * WORLD_WIDTH, WORLD_HEIGHT * Math.random());
  });

  // Main loop
  app.ticker.add(() => {

  });

  function animate(time: number) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
  }
  requestAnimationFrame(animate);
};
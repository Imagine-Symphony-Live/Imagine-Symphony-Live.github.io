import './css/styles.css';
import { Application, Container } from 'pixi.js';
import { BioElement } from './bio-element';
import { Musician } from './types/musician';
import { WORLD_WIDTH, WORLD_HEIGHT } from './constants';
import TWEEN from '@tweenjs/tween.js';
import { NucleusElement } from './nucleus-element';
import { Toolbar } from './toolbar';
import { FancyViewport } from './fancy-viewport';

window.onload = (): void => {

  const app = new Application(  {
    antialias: true,
    transparent: false,
    autoDensity: true,
    resolution: 2, // TODO: auto
    resizeTo: window,
    backgroundColor: 0xffffff,
  });

  const viewport = new FancyViewport({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    worldWidth: WORLD_WIDTH,
    worldHeight: WORLD_HEIGHT,
    interaction: app.renderer.plugins.interaction,
  });

  document.body.appendChild(app.view);

  app.stage.addChild(viewport);
  viewport.moveCenter(0,0);

  const toolbar = new Toolbar(viewport, app.view);
  app.stage.addChild(toolbar);
  toolbar.position.set(0, window.innerHeight - toolbar.height);

  window.addEventListener("resize", () => {
    toolbar.position.set(0, window.innerHeight - toolbar.height);
  });

  const nucleus = new NucleusElement();
  viewport.addChild(nucleus);

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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
  ];

  function unFocusAllExcept(allBios: Array<BioElement>, except: BioElement) {
    for (let i = 0; i < allBios.length; i++) {
      if(allBios[i] !== except) {
        allBios[i].unfocus();
      }
    }
  }

  const bioContainer = new Container();
  bioContainer.sortableChildren = true;
  viewport.addChild(bioContainer);

  const musicianBios = musicians.map((m) => new BioElement(m));
  musicianBios.forEach((b) => {
    b.on("focused", () => {
      unFocusAllExcept(musicianBios, b);
      viewport.transitionCenter(b.position.x, b.position.y);
    });
  });

  musicianBios.forEach((e) => {
    bioContainer.addChild(e);
    e.position.set((0.5 - Math.random()) * WORLD_WIDTH, (0.5 - Math.random()) * WORLD_HEIGHT);
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
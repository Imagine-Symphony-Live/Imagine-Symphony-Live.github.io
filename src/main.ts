import './css/styles.css';
import { Application, Container } from 'pixi.js';
import { BioElement } from './bio-element';
import { Musician } from './types/musician';
import { WORLD_WIDTH, WORLD_HEIGHT } from './constants';
import TWEEN from '@tweenjs/tween.js';
import { NucleusElement } from './nucleus-element';
import { Toolbar } from './toolbar';
import { FancyViewport } from './fancy-viewport';
import { Instrument } from './types/instruments';
import { SoundManager } from './sound-manager';


  //import track1 from '../assets/music/track-1.ogg';
  import track2 from '../assets/music/track-2.ogg';
  import track3 from '../assets/music/track-3.ogg';
  import track4 from '../assets/music/track-4.ogg';
  //import track5 from '../assets/music/track-5.ogg';
  import track6 from '../assets/music/track-6.ogg';
  import track7 from '../assets/music/track-7.ogg';
  import track8 from '../assets/music/track-8.ogg';
  //import track9 from '../assets/music/track-9.ogg';
  //import track10 from '../assets/music/track-10.ogg';
  import track11 from '../assets/music/track-11.ogg';
  import track12 from '../assets/music/track-12.ogg';
  import track13 from '../assets/music/track-13.ogg';
  import track14 from '../assets/music/track-14.ogg';
  //import track15 from '../assets/music/track-15.ogg';


window.onload = async () => {
  const sounds = new SoundManager([
    //track1,
    track2,
    track3,
    track4,
    //track5,
    track6,
    track7,
    track8,
    //track9,
    //track10,
    track11,
    track12,
    track13,
    track14,
    //track15,
  ]);

  await sounds.loadSounds();

  function instrumentSoundActivate(name: Instrument) {
    switch (name) {
      case "Violin":
        return sounds.activateTrack(track12);
      case "Viola":
        return sounds.activateTrack(track13);
      case "Cello":
        return sounds.activateTrack(track11);
      case "Bass":
        return sounds.activateTrack(track14);
      case "Harp":
        return sounds.activateTrack(track8);

      // case "Flute":
      // case "Piccolo":
      // case "Oboe":
      // case "English Horn":
      // case "Clarinet":
      // case "Basset Horn":
      // case "Bass Clarinet":
      // case "Bassoon":
      // case "Double Bassoon":
      // case "Saxophone":

      case "French Horn":
      case "Trumpet":
      case "Cornet":
        return sounds.activateTrack(track7);
      // case "Slide Trombone":
      // case "Tuba":

      // case "Timpani":
      // case "Bass Drum":
      // case "Snare Drum":
      // case "Chimes":
      // case "Cymbals":
      // case "Gong":
      // case "Triangle":
      case "Glockenspiel":
      case "Xylophone":
        return sounds.activateTrack(track6);
      // case "Castanets":
      // case "Tambourine":
    }
  }

  const app = new Application(  {
    antialias: true,
    transparent: false,
    autoDensity: true,
    resolution: 2, // TODO: auto
    resizeTo: window,
    backgroundColor: 0x000011,
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

  const listOfInstruments: Array<Instrument> = [
    "Violin",
    "Viola",
    "Cello",
    "Bass",
    "Harp",
    // "Flute",
    // "Piccolo",
    // "Oboe",
    // "English Horn",
    // "Clarinet",
    // "Basset Horn",
    // "Bass Clarinet",
    // "Bassoon",
    // "Double Bassoon",
    // "Saxophone",
    "French Horn",
    "Trumpet",
    "Cornet",
    // "Slide Trombone",
    // "Tuba",
    // "Timpani",
    // "Bass Drum",
    // "Snare Drum",
    // "Chimes",
    // "Cymbals",
    // "Gong",
    // "Triangle",
    "Glockenspiel",
    "Xylophone",
    // "Castanets",
    // "Tambourine",
  ];

  const musicians: Array<Musician> = [];

  for (let i = 0; i < 200; i++) {
    musicians.push({
      name: `${Math.random()}`,
      instrument: listOfInstruments[Math.floor(Math.random()*listOfInstruments.length)],
      date: new Date(),
    });
  }

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
  const activeInstruments: Array<Instrument> = [];
  musicianBios.forEach((b) => {
    b.on("focused", () => {
      unFocusAllExcept(musicianBios, b);
      viewport.transitionCenter(b.position.x, b.position.y, 500);
    });
    b.on("activated", () => {
      // Activate other bios with same instrument
      if(activeInstruments.indexOf(b.musician.instrument) === -1) {
        activeInstruments.push(b.musician.instrument);
        const toActivate: Array<{bioElement: BioElement, distanceSquared: number}> = musicianBios
          .filter((bf) => bf.musician.instrument === b.musician.instrument && bf !== b)
          .map((bf) => {
            return {
              bioElement: bf,
              distanceSquared: Math.pow(b.position.x - bf.position.x, 2) + Math.pow(b.position.y - bf.position.y, 2),
            }
          });

        instrumentSoundActivate(b.musician.instrument);

        const maxDistance = toActivate.reduce((p, {distanceSquared}) => Math.max(p, distanceSquared), 0);

        for (let i = 0; i < toActivate.length; i++) {
          const time = (toActivate[i].distanceSquared / maxDistance) * 3000;
          setTimeout(toActivate[i].bioElement.activate.bind(toActivate[i].bioElement), time);
        }
      }
    });
  });

  let i = 0;
  for (let r = 1; i < musicianBios.length; r++) {
    for (let t = 0; t < Math.PI * 2 &&  i < musicianBios.length; t+=Math.PI / 7) {
      const e = musicianBios[i];
      bioContainer.addChild(e);
      const dis = r * 250 - 50 + Math.random() * 100;
      const tRand = Math.random() * Math.PI / 14
      e.position.set(Math.cos(t + tRand) * dis, Math.sin(t + tRand) * dis);
      i++;
    }
  }
  // Main loop
  // app.ticker.add(() => {

  // });

  function animate(time: number) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
  }
  requestAnimationFrame(animate);
};
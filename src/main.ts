import './css/styles.css';
import { Application, Graphics } from 'pixi.js';
import TWEEN from '@tweenjs/tween.js';
import { loadFonts } from './styles';
import loadOverWorld from './overworld-state';
import introFilm from './intro-film-state';
import { StateMachine } from './state-machine';

window.onload = async () => {

  await Promise.all([
    loadFonts(),
  ]);

  const app = new Application({
    antialias: true,
    transparent: false,
    autoDensity: true,
    resolution: 2, // TODO: auto
    resizeTo: window,
    backgroundColor: 0x000000,
  });

  document.body.appendChild(app.view);

  //loadOverWorld(app);
  // const bigPlayButton = new Graphics();
  // bigPlayButton
  //   .beginFill(0xff0000)
  //   .drawRect(0,0,256,32)
  //   .endFill()
  // bigPlayButton.interactive = true;
  // app.stage.addChild(bigPlayButton);

  // bigPlayButton.on("pointerdown", async () => {
  //   app.stage.removeChild(bigPlayButton);
  //   await introFilm(app);
  // });

  const stateManager = new StateMachine(app);

  function animate(time: number) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
  }
  requestAnimationFrame(animate);
};
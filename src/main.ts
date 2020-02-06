import './css/styles.css';
import { Application, Graphics } from 'pixi.js';
import TWEEN from '@tweenjs/tween.js';
import { loadFonts } from './styles';
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

  // @TODO - this is necessary to prevent black screens on video playback
  // const bigPlayButton = new Graphics();
  // bigPlayButton
  //   .beginFill(0xff0000)
  //   .drawRect(0,0,256,32)
  //   .endFill()
  // bigPlayButton.interactive = true;
  // app.stage.addChild(bigPlayButton);

  // bigPlayButton.on("pointerdown", async () => {
  //   app.stage.removeChild(bigPlayButton);
    const stateManager = new StateMachine(app);
  //});

  function animate(time: number) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
  }
  requestAnimationFrame(animate);
};
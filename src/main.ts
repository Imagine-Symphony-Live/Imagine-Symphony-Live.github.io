import './css/styles.css';
import { Application, Graphics } from 'pixi.js';
import TWEEN from '@tweenjs/tween.js';
import { loadFonts } from './styles';
import { StateMachine } from './state-machine';
import footerLinks from './footer-links.json';

window.onload = async () => {

  await Promise.all([
    loadFonts(),
  ]);

  const app = new Application({
    antialias: true,
    transparent: false,
    autoDensity: true,
    resolution: window.devicePixelRatio, // TODO: auto
    resizeTo: window,
    backgroundColor: 0x000000,
  });

  document.body.appendChild(app.view);

  const footer = document.createElement('footer');
  const links = Object.entries(footerLinks).map(([label, url]) => {
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('title', url.replace(/^.*:\/\//,''));
    a.innerText = label;
    return a;
  });
  links.forEach((link) => footer.appendChild(link));
  document.body.appendChild(footer);

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


  // @TODO - replace this with app.ticker.add?
  function animate(time: number) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
  }
  requestAnimationFrame(animate);
};
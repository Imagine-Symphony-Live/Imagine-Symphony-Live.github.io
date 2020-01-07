import './css/styles.css';
import { Application } from 'pixi.js';
import TWEEN from '@tweenjs/tween.js';
import { loadFonts } from './styles';
import loadOverWorld from './overworld';

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
    backgroundColor: 0xC4C4C4,
  });

  document.body.appendChild(app.view);

  loadOverWorld(app);

  function animate(time: number) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
  }
  requestAnimationFrame(animate);
};
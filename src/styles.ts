import { TextStyle } from "pixi.js";

declare global {
  interface Window {
    WebFontConfig: object;
  }
}

export async function loadFonts() {
  await new Promise((resolve) => {
    // // Load them google fonts before starting...!
    window.WebFontConfig = {
      google: {
        families: ['Roboto:400'],
      },

      active() {
        resolve();
      },
    };

    /* eslint-disable */
    // include the web-font loader script
    (function() {
      const wf = document.createElement('script');
      wf.src = `${document.location.protocol === 'https:' ? 'https' : 'http'
      }://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js`;
      wf.type = 'text/javascript';
      wf.async = true;
      const s = document.getElementsByTagName('script')[0];
      if(s.parentNode) s.parentNode.insertBefore(wf, s);
    }());
    /* eslint-enabled */
  });
}

export const TEXT_STYLE_H2 = new TextStyle({
  fill: "#ffffff",
  fontFamily: "Roboto",
})

export const TEXT_STYLE_BIO_P = new TextStyle({
  fill: "#ffffff",
  fontFamily: "Roboto",
  wordWrap: true,
  wordWrapWidth: 800,
})
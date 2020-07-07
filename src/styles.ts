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

export const TEXT_STYLE_BUTTON = new TextStyle({
  fill: "#ffffff88",
  fontSize: 48,
  fontFamily: "Roboto",
  fontWeight: '400',
})

export const TEXT_STYLE_BUTTON_HOVER = new TextStyle({
  fill: "#ffffff",
  fontSize: 48,
  dropShadow: true,
  dropShadowColor: '#ffffff',
  dropShadowBlur: 5,
  dropShadowAngle: 0,
  dropShadowDistance: 0,
  fontFamily: "Roboto",
  fontWeight: '400',
})

export const TEXT_STYLE_H2 = new TextStyle({
  fill: "#ffffff",
  fontSize: 24,
  fontFamily: "Roboto",
  fontWeight: '400',
})

export const TEXT_STYLE_INTERACTIVE_NUM = new TextStyle({
  fill: "#ffffffaa",
  fontSize: 48,
  fontFamily: "Roboto",
  fontWeight: '400',
})

export const TEXT_STYLE_CENSORED = new TextStyle({
  fill: "#ffffff",
  fontFamily: "Mono",
  wordWrap: true,
  fontSize: 8,
  fontWeight: 'bold'
})

export const TEXT_STYLE_LOADING = new TextStyle({
  fill: "#ffffff",
  fontFamily: "Mono",
  wordWrap: true,
  fontSize: 18,
})

export const TEXT_STYLE_BIO_P = new TextStyle({
  fill: "#ffffff",
  fontFamily: "Roboto",
  fontWeight: '400',
  wordWrap: true,
  wordWrapWidth: 400,
  fontSize: 12,
})

export const TET_STYLE_BIO_SUBTITLE = new TextStyle({
  fill: "#EF7700",
  fontFamily: "Roboto",
  fontWeight: '400',
  fontSize: 12,
});
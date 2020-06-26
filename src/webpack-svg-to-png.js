const fs = require('fs').promises;
const { DOMParser } = require('xmldom');
const canvas = require('canvas');
const fetch = require('node-fetch');
const Canvg = require('canvg').Canvg;
const presets = require('canvg').presets;
const getOptions = require('loader-utils').getOptions;

const preset = presets.node({
  DOMParser,
  canvas,
  fetch
});

module.exports = async function (content) {
  const callback = this.async();
  try {
    let {
      width,
      height,
    } = getOptions(this);

    const canvas = preset.createCanvas(parseInt(width), parseInt(height));
    const ctx = canvas.getContext('2d');
    const v = Canvg.fromString(ctx, content, preset);

    // Render only first frame, ignoring animations.
    await v.render();

    const png = canvas.toBuffer();

    callback(null, png);
  } catch (e) {
    callback(e);
  }
}
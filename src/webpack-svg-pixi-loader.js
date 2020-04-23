
const cheerio = require('cheerio');
const parse = require("d-path-parser");
const querystring = require('querystring');

module.exports = function (source) {
  const options = querystring.parse(this.resourceQuery.replace(/^\?/, ''));
  if (!options.path) throw new Error(`Missing path`);

  const $ = cheerio.load(source);
  const node = $(options.path);

  if(!node.length) throw new Error(`Path ${options.path} not found in ${this.resourcePath}`);

  const pathString = node.attr('d');

  if(!pathString) throw new Error(`Path ${options.path} missing 'd' attribute`);

  const code = `export default function() {${pathToCode(pathString)}}`;

  return code;
}

function pathToCode(pathString) {

  const commands = parse(pathString);

  let commandStrs = [];

  let x, y;

  for (var i = 0; i < commands.length; i++) {
    const [commandStr, nx, ny] = commandToCode(commands[i], x, y);
    x = nx;
    y = ny;
    if(commandStr) commandStrs.push(commandStr);
  }
  if(!commandStrs.length) return '';
  return `this.${commandStrs.join('.')}`;
}

// adapted from https://github.com/bigtimebuddy/pixi-svg/blob/master/src/SVG.js
// Thanks!
function commandToCode(command, x, y) {
  switch (command.code) {

    case 'm': {
      return [`moveTo(${x += command.end.x},${y += command.end.y})`, x, y];
    }
    case 'M': {
      return [`moveTo(${x = command.end.x},${y = command.end.y})`, x, y];
    }
    case 'H': {
      return [`lineTo(${x = command.value},${y})`, x, y];
    }
    case 'h': {
      return [`lineTo(${x += command.value},${y})`, x, y];
    }
    case 'V': {
      return [`lineTo(${x},${y = command.value})`, x, y];
    }
    case 'v': {
      return [`lineTo(${x},${y += command.value})`, x, y];
    }
    case 'Z': {
      return [`closePath()`, x, y];
    }
    case 'L': {
      return [`lineTo(${x = command.end.x},${y = command.end.y})`, x, y];
    }
    case 'l': {
      return [`lineTo(${x += command.end.x},${y += command.end.y})`, x, y];
    }
    case 'C': {
      return [`bezierCurveTo(${command.cp1.x},${command.cp1.y},${command.cp2.x},${command.cp2.y},${x = command.end.x},${y = command.end.y})`, x, y];
    }
    case 'c': {
      const currX = x;
      const currY = y;
      return [`bezierCurveTo(${currX + command.cp1.x},${currY + command.cp1.y},${currX + command.cp2.x},${currY + command.cp2.y},${x += command.end.x},${y += command.end.y})`, x, y];
    }
    case 's':
    case 'q': {
      const currX = x;
      const currY = y;
      return [`quadraticCurveTo(${currX + command.cp.x},${currY + command.cp.y},${x += command.end.x},${y += command.end.y})`, x, y];
    }
    case 'S':
    case 'Q': {
      return [`quadraticCurveTo(${command.cp.x},${command.cp.y},${x = command.end.x},${y = command.end.y})`, x, y];
    }
    default: {
      console.info('[SVGUtils] Draw command not supported:', command.code, command);
      return ['', x, y];
    }
  }
}
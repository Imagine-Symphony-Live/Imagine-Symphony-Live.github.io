const fs = require('fs');
const cheerio = require('cheerio');

const stepsBetween = {
  C: -9,
  D: -7,
  E: -5,
  F: -4,
  G: -2,
  A: 0,
  B: 2,
};
const centerOctave = 4;

export const calcPitch = function(step, octave, alter = 0) {
  return stepsBetween[step] + (octave - centerOctave) * 12 + alter;
}

const crimsonProgressBar = require("crimson-progressbar");
// Basic progress bar
const standardProgressBar = (total) => (progress) => crimsonProgressBar.renderProgressBar(progress, total, "green", "red", "▓", "░", false);

export const parseScore = (fileData) => {
  const $ = cheerio.load(fileData, {xmlMode: true});
  const $root = $('score-partwise');
  if(!$root) throw new Error('Expecting <score-partwise>');
  return {
    title: $('movement-title', $root).text(),
    author: $('identification creator', $root).text(),
    parts: $('part-list > score-part[id]', $root).toArray().map(parseScorePart($, $root)),
  }
};

export const parseScorePart = ($, $root) => (p) => {
  const id = $(p).attr('id');
  const part = {
    id,
    name: $('part-name', p).text(),
  };

  const measures = $(`part[id="${id}"] > measure`, $root).toArray();
  part.measureCount = measures.length;

  let noteCounter = 0;
  let lastNoteCounter = 0;
  let partNotes = [];
  let currentDivision = 0;
  let currentDuration = 0;

  // Measures are probably already sorted, but we need to make sure for the following code to work correctly
  measures.sort((a, b) => Math.sign(parseInt($(a).attr('number')) - parseInt($(b).attr('number'))));

  console.log(`\nProcessing part ${part.id}(${part.name})`);
  const measureProgress = standardProgressBar(measures.length);
  for (let i = 0; i < measures.length; i++) {
    const measure = measures[i];
    noteCounter = Math.round(noteCounter * 10) / 10;
    const measureNumber = parseInt($(measure).attr('number'));
    const division = $('> attributes > divisions', measure).text();
    if(division) currentDivision = parseInt(division);
    if(currentDivision <= 0) throw new Error(`Cannot process measures with division <= 0 for ${part.id}(${part.name}) on measure ${measureNumber}`);

    const notes = $('> note, > backup, > forward, > direction', measure).toArray();
    for (let j = 0; j < notes.length; j++) {
      const note = notes[j];
      const isRest = !!$('> rest', note).length;
      const isChord = !!$('> chord', note).length;
      const isDirection = note.tagName === 'direction';
      const isWords = !!$('> direction-type > words', note).length;
      const duration = $('> duration', note).text();
      const isNote = note.tagName === "note";
      if(duration) currentDuration = parseInt(duration);
      if(note.tagName === "backup") currentDuration = -currentDuration;

      if(isNote && !isRest) {
        const pitchStep = $('> pitch > step', note).text();
        const pitchOctave = parseInt($('> pitch > octave', note).text());
        const pitchAlter = parseInt($('> pitch > alter', note).text() || '0');
        const pitch = calcPitch(pitchStep, pitchOctave, pitchAlter);

        partNotes.push({
          note: Math.round((isChord ? lastNoteCounter : noteCounter) * 10000) / 10000,
          pitch,
        });
      }

      if(isWords) {
        partNotes.push({
          note: Math.round((isChord ? lastNoteCounter : noteCounter) * 10000) / 10000,
          words: $('> direction-type > words', note).text().replace(/\n+/,''),
        });
      }

      if(isChord || isDirection) {
        continue;
      }

      if(currentDuration) {
        lastNoteCounter = noteCounter;
        noteCounter += 2 * currentDuration / currentDivision;
      }
    }

    measureProgress(i + 1);
  }
  partNotes.sort(({note:A},{note:B}) => Math.sign(A-B));
  part.notes = partNotes;
  return part;
};

console.log(`Parsing ${process.argv[2]} to ${process.argv[3]}...`);

const scoreData = fs.readFileSync(process.argv[2]);
const parseScoreFile = fs.openSync(process.argv[3], 'w');

const score = parseScore(scoreData);

fs.writeSync(parseScoreFile, JSON.stringify(score, null, 2));
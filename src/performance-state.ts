import { Container, Application, Point, Sprite, interaction } from "pixi.js";
import ClickTrack from 'click-track';
import State from "./state";
import { InteractiveInstrument } from "./interactive-instrument";
import { DraggableSpawn } from "./draggable-spawn";
import { Interactive } from "./interactive";
import mainTrack from "./tracks/main/";
import { CueEvent } from "click-track/dist/src/definitions/cue-event";
import { Emitter } from "pixi-particles";
import { ParticleCue } from "./types/particle-cue";
import { Draggable } from "./draggable";
import { PerformanceVideoPlayer } from "./performance-video-player";
import ProgressBar from "./progress-bar";
import GradientBackdrop from "./gradient-backdrop";
import { parts } from './tracks/main/score-export.json';
import stageImage from '../assets/images/instrumentsection-2.svg';
import { COLOR_BOOKSTORE_HIGHLIGHT, COLOR_BUS_HIGHLIGHT, COLOR_DESERT_HIGHLIGHT, COLOR_FOREST_HIGHLIGHT, COLOR_LAKE_HIGHLIGHT, COLOR_MOUNTAIN_HIGHLIGHT, COLOR_RECAP_HIGHLIGHT, COLOR_HALL_HIGHLIGHT } from "./colors";


type InteractiveCue = [Interactive, number, any];

export default class PerformanceState extends State {

  protected track: HTMLAudioElement;
  protected bkgVideo: PerformanceVideoPlayer;
  protected interactives: Array<Interactive>;
  private app: Application;
  static clickTrack: ClickTrack<InteractiveCue>;
  private clickTrackParticles: ClickTrack<ParticleCue>;
  private interactivesContainer: Container;
  private particleContainer: Container;
  private emitters: Array<Emitter> = [];
  protected intendedStageSize: [number, number];
  protected centerStage: [number, number];
  protected loadProgressbar: ProgressBar;
  protected stageInteractiveBackground: Sprite = Sprite.from(stageImage);

  // DIY interaction management
  private interactiveHovering?: Interactive;
  private mousePos: Point;
  private mouseChecked: boolean = true;
  static dragSpawn: DraggableSpawn = new DraggableSpawn();
  protected bkg = new GradientBackdrop();

  async createContainer(app: Application): Promise<Container> {
    this.app = app;

    // The container to be returned
    const container = new Container();

    container.addChild(this.bkg);
    this.bkg.colorA = [0,0,0];
    this.bkg.colorB = [0,0,0];

    this.bkg.position.set(0,0);


    // Get music track information
    const {
      interactives,
      trackUrl,
      tempo,
      offset,
      particleCues,
      stageSize,
      stageCenter,
    } = mainTrack();

    app.renderer.backgroundColor = 0x000000;

    this.intendedStageSize = [stageSize[0] + 250, (stageSize[1] + 416)];
    this.centerStage = stageCenter;

    this.bkgVideo = new PerformanceVideoPlayer(trackUrl, stageSize[0] + 250);
    this.bkgVideo.alpha = 0;
    container.addChild(this.bkgVideo);
    this.bkgVideo.position.set(0,0);

    // Assemble interactive things
    this.interactivesContainer = new Container();
    this.interactivesContainer.alpha = 0;
    container.addChild(this.interactivesContainer);
    this.interactivesContainer.position.set(window.innerWidth / 2, window.innerHeight * 3 / 4);

    // DIY interaction management
    this.interactivesContainer.interactive = true;
    this.interactivesContainer.on("mousemove", this.onMove.bind(this));

    this.interactives = interactives;

    this.interactivesContainer.addChild(this.stageInteractiveBackground);

    this.interactives.forEach((s1) => {
      s1.interactive = true;
      this.interactivesContainer.addChild(s1);
    });

    // Origin set is handled in resize
    PerformanceState.dragSpawn.alpha = 0;
    container.addChild(PerformanceState.dragSpawn);
    PerformanceState.dragSpawn.on("dragged", this.onCircleDrag.bind(this));
    interactives.push(PerformanceState.dragSpawn);

    // Assemble cues
    const cues: Array<[number, InteractiveCue]> = [];

    // Combine cues from all interactives
    interactives.forEach((ii) => {
      cues.push(...ii.cues.map<[number, InteractiveCue]>((cue) => [cue[0], [ii, cue[1], cue[2]]]));
    });

    // Sort all cues ascending
    cues.sort((a, b) => Math.sign(a[0] - b[0]));

    // Click track for syncing up
    PerformanceState.clickTrack = new ClickTrack<InteractiveCue>({
      timerSource: () => {
        try {
          return this.bkgVideo.currentTime
        } catch {
          return 0;
        }
      },
      tempo,
      offset,
      cues: cues
    });

    PerformanceState.clickTrack.on("cue", this.handleClickCue.bind(this));

    const biomeClickTrack = new ClickTrack<string>({
      timerSource: PerformanceState.clickTrack.timer,
      tempo,
      offset,
      cues: parts.P37.notes
        .filter(({ words = '' }) => /\(.+\)/.test(words))
        .map(({ note, words = '' }) => {
          const [,biome = ''] = words.match(/\(([^\)]+)\)/) || [,''];
          return [note, biome.toLowerCase()];
        })
    });

    const bkgVideoClicktrack = new ClickTrack<[[number,number,number],[number,number,number]]>({
      timerSource: PerformanceState.clickTrack.timer,
      cues: [
        [0.1,
         [[43,43,42],[83,81,76]]
        ],
        [5.0,
         [[30,21,15],[3,4,6]]
        ],
        [6.0,
         [[30,17,12],[19,11,9]]
        ],
        [12.0,
         [[3,5,6],[15,10,8]]
        ],
        [15.0,
         [[38,27,17],[6,9,9]]
        ],
        [17.0,
         [[54,41,31],[2,6,4]]
        ],
        [25.0,
         [[18,19,16],[4,8,8]]
        ],
        [32.5,
         [[4,8,8], [95,98,95]]
        ],
        [40.8,
         [[29,27,24],[7,5,3]]
        ],
        [49.0,
         [[25,24,22],[2,7,7]]
        ],
        [56.0,
         [[7,5,3],[29,27,24]]
        ],
        [66.0,
         [[7,5,3],[7,5,3]]
        ],
        [67.0,
         [[7,5,3],[7,5,3]]
        ],
       ]
    });

    biomeClickTrack.on("cue", (ct, e) => {
      if(e.data !== null) {
        this.bkg.biomeTheme = e.data;
        this.interactives.forEach((i) => {
          if(i instanceof InteractiveInstrument) {
            switch (e.data) {
              case "bookstore":
                i.highlightColor = COLOR_BOOKSTORE_HIGHLIGHT;
                break;

              case "bus":
                i.highlightColor = COLOR_BUS_HIGHLIGHT;
                break;

              case "desert":
                i.highlightColor = COLOR_DESERT_HIGHLIGHT;
                break;

              case "forest":
                i.highlightColor = COLOR_FOREST_HIGHLIGHT;
                break;

              case "lake":
                i.highlightColor = COLOR_LAKE_HIGHLIGHT;
                break;

              case "mountain":
                i.highlightColor = COLOR_MOUNTAIN_HIGHLIGHT;
                break;

              case "recap":
                i.highlightColor = COLOR_RECAP_HIGHLIGHT;
                break;

              case "hall":
              default:
                i.highlightColor = COLOR_HALL_HIGHLIGHT;
                break;
            }
          };
        });
      }
    });

    const closingClicktrack = new ClickTrack<() => void>({
      timerSource: PerformanceState.clickTrack.timer,
      cues: [
        [356,
         () => {
          this.interactivesContainer.alpha = 0;
          PerformanceState.dragSpawn.alpha = 0;
          this.bkgVideo.theaterMode = false;
          this.bkg.colorA = [0,0,0];
          this.bkg.colorB = [0,0,0];
         }
        ],
       ]
    });

    closingClicktrack.on("cue", (e, {data}) => data && data());

    bkgVideoClicktrack.on("cue", (ct, e) => {
      if(e.data !== null) {
        this.bkg.colorA = <[number,number,number]>e.data[0].map(d => d/100);
        this.bkg.colorB = <[number,number,number]>e.data[1].map(d => d/100);
      }
    });

    bkgVideoClicktrack.on("lastCue", () => {
      this.interactivesContainer.alpha = 1;
      PerformanceState.dragSpawn.alpha = 1;
      this.bkgVideo.theaterMode = true;
      this.bkgVideo.canInteract = false;
      this.bkgVideo.pause();
      PerformanceState.dragSpawn.on('firstDrag', () => {
        this.bkgVideo.resume();
        this.bkgVideo.canInteract = true; // TEMP
      });
    });

    // Sort all cues ascending
    particleCues.sort((a, b) => Math.sign(a[0] - b[0]));

    // this.clickTrackParticles = new ClickTrack<ParticleCue>({
    //   timerSource: () => track.currentTime,
    //   tempo,
    //   offset,
    //   cues: particleCues
    // });

    //this.clickTrackParticles.on("cue", this.handleParticleCue.bind(this));

    //this.particleContainer = new Container();
    // SVG group size: 828 131.65
    // Set instrument position to SVG group center
    // @TODO put this in one spot
    //this.particleContainer.position.set(window.innerWidth / 2 - 414, window.innerHeight * 3 / 4 -131.65);
    //container.addChild(this.particleContainer);

    this.loadProgressbar = new ProgressBar();
    container.addChild(this.loadProgressbar);
    this.loadProgressbar.position.set(window.innerWidth/2, window.innerHeight/2);
    const loadIntervalCheck = setInterval(() => {
      this.loadProgressbar.progress = this.bkgVideo.percentLoaded;
    }, 200);

    const loadPromise = new Promise(async (resolve, reject) => {
      await new Promise((resolve, reject) => {
        const loadTimeout = setTimeout(() => {
          // Timeout error?
          console.log("This is taking a while to load...");
        }, 5000);
        this.bkgVideo.preload().then(() => {

          // setTimeout(() => {
          //   this.bkgVideo.currentTime = 5*60 + 45;
          // }, 1000);

          clearTimeout(loadTimeout);
          resolve();
        });
      });
      this.onResize({width: window.innerWidth, height: window.innerHeight});
      resolve();
      this.bkgVideo.alpha = 1;
      this.loadProgressbar.progress = 1;
      clearInterval(loadIntervalCheck);
      setTimeout(() => {
        container.removeChild(this.loadProgressbar);
        this.loadProgressbar.destroy();
        delete this.loadProgressbar;
      }, 500);
    });


    this.bkgVideo.on("ended", () => {
      // shut it down!
      closingClicktrack.deconstruct();
      closingClicktrack.deconstruct();
      bkgVideoClicktrack.deconstruct();
      PerformanceState.clickTrack.deconstruct();
      //this.clickTrackParticles.deconstruct();
      this.events.get("complete").dispatch(this, 1);
    });

    return container;
  }

  handleClickCue(clicktrack: ClickTrack, cue: CueEvent<InteractiveCue>) {
    if(cue.data && cue.data[0]) {
      const [interactive, state, value] = cue.data;
      interactive.onCue(cue.cue, state, value);
    }
  }

  handleParticleCue(clicktrack: ClickTrack, cue: CueEvent<ParticleCue>) {
    if(cue.data) {
      const emitter = new Emitter(
        this.particleContainer,
        cue.data[0],
        {
          ...cue.data[1],
          autoUpdate: false,
        }
      );

      this.emitters.push(emitter);
    }
  }

  onCircleDrag(dragging: Draggable, e: interaction.InteractionEvent) {
    if (this.app) {
      const i = this.app.renderer.plugins.interaction.hitTest(e.data.global, this.interactivesContainer);
      if (i && i instanceof InteractiveInstrument) {
        i.emit("mousedragout", this.mousePos);
        i.emit("drop", dragging, e);
      }
    }
  }

  onMove(e: interaction.InteractionEvent) {
    this.mousePos = e.data.global;
    this.mouseChecked = false;
  }

  onTick(deltaMs: number) {

    this.bkg.onTick(deltaMs);

    if(this.loadProgressbar && this.loadProgressbar.progress < 1) {
      this.loadProgressbar.onTick(deltaMs);
      return;
    };

    const currentBeat = PerformanceState.clickTrack.beat;
    const beatDelta = (deltaMs / 1000) * PerformanceState.clickTrack.tempo;

    for (let i = 0; i < this.interactives.length; i++) {
      this.interactives[i].onTick(currentBeat, beatDelta);
    }

    for (let i = this.emitters.length - 1; i >= 0; i--) {
      if(this.emitters[i].parent === null) {
        // remove from array, it's destroyed
        this.emitters.splice(i, 1);
        continue;
      }

      // Perform update using beats
      this.emitters[i].update(beatDelta);
    }


    // DIY mouse enter/mouse out interaction handling
    // This is here because while draggin draggables, mouseenter and mouseout events aren't triggered
    if(PerformanceState.dragSpawn.isDragging && this.app && !this.mouseChecked) {
      this.mouseChecked = true;
      const object = this.app.renderer.plugins.interaction.hitTest(this.mousePos, this.interactivesContainer);
      if (object && object instanceof Interactive) {
        if(!this.interactiveHovering) {
          // Mouse enter
          this.interactiveHovering = object;
          this.interactiveHovering.emit("mousedragover", this.mousePos);
        } else if(this.interactiveHovering !== object) {
          // Mouse enter and out (new object)
          object.emit("mousedragover", this.mousePos);
          this.interactiveHovering.emit("mousedragout", this.mousePos);
          this.interactiveHovering = object;
        }
      } else if(this.interactiveHovering) {
        // mouse out
        this.interactiveHovering.emit("mousedragout", this.mousePos);
        this.interactiveHovering = undefined;
      }
    }
  }

  onResize(size: { width: number, height: number }) {

    if(this.loadProgressbar && this.loadProgressbar.progress < 1) {
      this.loadProgressbar.position.set(size.width/2, size.height/2);
    }

    let paddTop = 0;
    if(!document.fullscreen) {
      const nav = document.getElementsByTagName("nav");
      if(nav && nav[0]) {
        const {y,height} = nav[0].getBoundingClientRect();
        paddTop = y + height;
      }
    }

    const multiplier = Math.min(size.width / this.intendedStageSize[0], size.height / this.intendedStageSize[1]);
    //this.interactivesContainer.scale.set(multiplier, multiplier);
    this.interactives.forEach((s1) => {
      s1.multiplierResize(multiplier);
    });

    this.stageInteractiveBackground.scale.set(multiplier);
    const bounds = this.interactivesContainer.getBounds();

    this.bkg.multiplierResize(multiplier);

    this.bkgVideo.position.set(0,paddTop);
    this.bkgVideo.multiplierResize(multiplier);

    const videoBounds = this.bkgVideo.getBounds();

    this.interactivesContainer.position.set(
      (size.width - bounds.width) / 2,
      videoBounds.bottom - bounds.height * 0.10);

    PerformanceState.dragSpawn.multiplierResize(multiplier);

    PerformanceState.dragSpawn.setOrigin(
      this.interactivesContainer.position.x + multiplier * this.centerStage[0],
      this.interactivesContainer.position.y + multiplier * this.centerStage[1],
    );

  }

  async cleanUp() {

  }

}
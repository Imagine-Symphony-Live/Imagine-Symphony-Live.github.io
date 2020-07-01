import { Container, Application, Point, Text } from "pixi.js";
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


type InteractiveCue = [Interactive, number, any];

export default class PerformanceState extends State {

  protected track: HTMLAudioElement;
  protected bkgVideo: PerformanceVideoPlayer;
  protected interactives: Array<Interactive> = [];
  private app: Application;
  static clickTrack: ClickTrack<InteractiveCue>;
  private clickTrackParticles: ClickTrack<ParticleCue>;
  private interactivesContainer: Container = new Container();
  private particleContainer: Container;
  private emitters: Array<Emitter> = [];
  protected intendedStageSize: [number, number];
  protected centerStage: [number, number];
  protected loadProgressbar:ProgressBar = new ProgressBar();

  // DIY interaction management
  private interactiveHovering?: Interactive;
  private mousePos: Point;
  private mouseChecked: boolean = true;
  private dragSpawn: DraggableSpawn = new DraggableSpawn();

  async createContainer(app: Application): Promise<Container> {
    this.app = app;

    // The container to be returned
    const container = new Container();

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

    this.intendedStageSize = [stageSize[0] + 200, (stageSize[1] + 500)];
    this.centerStage = stageCenter;

    this.bkgVideo = new PerformanceVideoPlayer(trackUrl, 1024);
    this.bkgVideo.alpha = 0;
    container.addChild(this.bkgVideo);
    this.bkgVideo.position.set(0,0);

    // Assemble interactive things
    this.interactivesContainer.alpha = 0;
    container.addChild(this.interactivesContainer);
    this.interactivesContainer.position.set(window.innerWidth / 2, window.innerHeight * 3 / 4);

    // DIY interaction management
    this.interactivesContainer.interactive = true;
    this.interactivesContainer.on("mousemove", this.onMove.bind(this));

    this.interactives = interactives;

    this.interactives.forEach((s1) => {
      s1.interactive = true;
      this.interactivesContainer.addChild(s1);
    });

    // Origin set is handled in resize
    this.dragSpawn.alpha = 0;
    container.addChild(this.dragSpawn);
    this.dragSpawn.on("dragged", this.onCircleDrag.bind(this));
    interactives.push(this.dragSpawn);

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
          clearTimeout(loadTimeout);
          resolve();
        });
      });
      this.onResize({width: window.innerWidth, height: window.innerHeight});
      resolve();
      this.bkgVideo.alpha = 1;
      this.interactivesContainer.alpha = 1;
      this.dragSpawn.alpha = 1;
      this.loadProgressbar.progress = 1
      clearInterval(loadIntervalCheck);
      setTimeout(() => {
        container.removeChild(this.loadProgressbar);
        this.loadProgressbar.destroy();
        delete this.loadProgressbar;
      }, 500);
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

  onCircleDrag(dragging: Draggable, e: PIXI.interaction.InteractionEvent) {
    if (this.app) {
      const i = this.app.renderer.plugins.interaction.hitTest(e.data.global, this.interactivesContainer);
      if (i && i instanceof InteractiveInstrument) {
        i.emit("mousedragout", this.mousePos);
        i.emit("drop", dragging, e);
      }
    }
  }

  onMove(e: PIXI.interaction.InteractionEvent) {
    this.mousePos = e.data.global;
    this.mouseChecked = false;
  }

  onTick(deltaMs: number) {
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
    if(this.dragSpawn.isDragging && this.app && !this.mouseChecked) {
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

    const multiplier = Math.min(size.width / this.intendedStageSize[0], size.height / this.intendedStageSize[1]);
    //this.interactivesContainer.scale.set(multiplier, multiplier);
    this.interactives.forEach((s1) => {
      s1.multiplierResize(multiplier);
    });
    const bounds = this.interactivesContainer.getBounds();

    this.bkgVideo.multiplierResize(multiplier);

    const videoBounds = this.bkgVideo.getBounds();

    this.interactivesContainer.position.set(
      (size.width - bounds.width) / 2,
      videoBounds.bottom - bounds.height * 0.5);

    this.dragSpawn.multiplierResize(multiplier);

    this.dragSpawn.setOrigin(
      this.interactivesContainer.position.x + multiplier * this.centerStage[0],
      this.interactivesContainer.position.y + multiplier * this.centerStage[1],
    );

  }

  async cleanUp() {

  }

}
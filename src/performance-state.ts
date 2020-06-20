import { Container, Application, Point } from "pixi.js";
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
import introFilmUrl from '../assets/video/film.mp4';


type InteractiveCue = [Interactive, number, any];

export default class PerformanceState extends State {

  protected track: HTMLAudioElement;
  protected bkgVideo: PerformanceVideoPlayer;
  protected interactives: Array<Interactive>;
  private app: Application;
  private clickTrack: ClickTrack<InteractiveCue>;
  private clickTrackParticles: ClickTrack<ParticleCue>;
  private interactivesContainer: Container;
  private particleContainer: Container;
  private emitters: Array<Emitter> = [];
  private lastBeat: number = 0;
  protected intendedStageSize: [number, number];
  protected centerStage: [number, number];

  // DIY interaction management
  private interactiveHovering?: Interactive;
  private mousePos: Point;
  private mouseChecked: boolean = true;
  private dragSpawn: DraggableSpawn;

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

    this.intendedStageSize = [stageSize[0] + 200, (stageSize[1] + 500)];
    this.centerStage = stageCenter;

    this.bkgVideo = new PerformanceVideoPlayer(introFilmUrl, 1024);
    await this.bkgVideo.preload();
    container.addChild(this.bkgVideo);
    this.bkgVideo.position.set(0,0);

    // Hack to set video
    setTimeout(() => {
      this.bkgVideo.currentTime = 60;
    },1000);

    // Assemble interactive things
    this.interactivesContainer = new Container();
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

    // Create draggable
    this.dragSpawn = new DraggableSpawn();
    // Origin set is handled in resize
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
    this.clickTrack = new ClickTrack<InteractiveCue>({
      timerSource: () => this.bkgVideo.currentTime,
      tempo,
      offset,
      cues: cues
    });

    this.clickTrack.on("cue", this.handleClickCue.bind(this));

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

    app.renderer.backgroundColor = 0;//0x55aacc;

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
    const currentBeat = this.clickTrack.beat;
    const beatDelta = (deltaMs / 1000) * this.clickTrack.tempo;

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
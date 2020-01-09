import { Application, Container } from "pixi.js";
import State from "./state";
import IntroFilmState from "./intro-film-state";
import { StateEvents } from "./types/state-events";
import OverWorldState from "./overworld-state";

type StateNames = "intro" | "overworld";

export class StateMachine {
  protected states: Array<{name: string, state: State}> = new Array();
  protected currentStateName: string;
  protected currentState: State;
  protected currentStateContainer: Container;

  constructor(public app: Application) {
    this.addState("intro", new IntroFilmState());
    this.addState("overworld", new OverWorldState());

    this.addStateCondition("intro", "complete", "overworld");

    this.setState("intro");
  }

  addState(name: StateNames, state: State) {
    this.states.push({name, state});
  }

  addStateCondition(triggerState: StateNames, stateEvent: StateEvents, induceState: StateNames) {
    const stateF = this.states.find(({name}) => name == triggerState);
    if(!stateF) {
      throw new Error(`State ${triggerState} unknown`);
    }

    stateF.state.on(stateEvent, this.setState.bind(this, induceState));
  }

  async setState(findName: StateNames) {
    const stateF = this.states.find(({name}) => name == findName);
    if(!stateF) {
      throw new Error(`State ${findName} unknown`);
    }
    const newContainer = await stateF.state.createContainer(this.app);
    if(this.currentState) {
      await this.currentState.cleanUp();
    }
    if(this.currentStateContainer) {
      console.log("removing...");
      this.app.stage.removeChild(this.currentStateContainer);
      this.currentStateContainer.destroy();
    }
    this.app.stage.addChild(newContainer);
    this.currentStateContainer = newContainer;
    this.currentStateName = findName;
    this.currentState = stateF.state;
  }

}
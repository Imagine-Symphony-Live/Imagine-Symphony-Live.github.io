import { EventList, IEventHandler } from 'ste-events';
import { Container, Application } from 'pixi.js';
import { StateEvents } from './types/state-events';

export default abstract class State {
  protected events = new EventList<State, any>();

  // Adds event listener
  on(event: StateEvents, fn: IEventHandler<this, any>): void {
    this.events.get(event).subscribe(fn);
  }

  // Removes event listener
  off(event: StateEvents, fn: IEventHandler<this, any>): void {
    this.events.get(event).unsubscribe(fn);
  }

  abstract createContainer(app: Application): Promise<Container>;

  abstract cleanUp(): Promise<void>;
}
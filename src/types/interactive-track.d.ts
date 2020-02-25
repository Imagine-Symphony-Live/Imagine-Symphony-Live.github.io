import { Interactive } from "../interactive";

export type InteractiveTrack = {
  interactives: Array<Interactive>;
  trackUrl: string;
  tempo: number;
  offset: number;
}
import {Photographer} from "./photographer";
import {Concept} from "./concept";

export interface BookingConceptConfig {
  id: number,
  photographerId : number,
  photographer : Photographer,
  conceptId : number,
  concept : Concept,
  durationConfig :string
}

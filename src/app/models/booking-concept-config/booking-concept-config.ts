import { Concept } from "../concept/concept";

export interface BookingConceptConfig {
    id: number,
    photographerId: number,
    conceptId: number,
    concept: Concept,
    durationConfig: string,
}

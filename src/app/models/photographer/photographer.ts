import {User} from "../user/user";
import {BookingConceptConfig} from "./booking-concept-config";

export interface Photographer extends User{
  Rate : number,
  BookingConceptConfigs : BookingConceptConfig
}

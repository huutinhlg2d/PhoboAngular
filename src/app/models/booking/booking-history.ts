import { BookingState } from "./booking-state";
export interface BookingHistory {
  id : number;
  customerId: number;
  customerEmail: string;
  customerName: string;
  photographerName: string;
  photographerEmail: string;
  conceptName: string;
  bookingDate: string;
  bookingRate: number;
  duration: number;
  location: string;
  note: string;
  state: BookingState;
}

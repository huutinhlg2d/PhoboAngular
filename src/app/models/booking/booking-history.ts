import { BookingState } from "./booking-state";
export interface BookingHistory {
  id : number;
  customerId: number;
  customerEmail: string;
  customerName: string;
  photographerId: number;
  photographerName: string;
  photographerEmail: string;
  conceptName: string;
  bookingDate: Date;
  bookingRate: number;
  duration: number;
  location: string;
  note: string;
  bookingState: BookingState;
}

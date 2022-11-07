import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { BookingHistory } from 'src/app/models/booking/booking-history';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingHistoryService {
  private API_BOOKING= environment.apiBaseUrl + "/Booking";

  constructor(private http: HttpClient) {
  }

  public getAllBookingByCustomerId(customerId: string): Observable<Array<BookingHistory>> {
    return this.http.get<Array<BookingHistory>>(`${this.API_BOOKING}/Booking/${customerId}`);
  }

}

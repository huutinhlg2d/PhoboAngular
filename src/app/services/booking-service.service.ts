import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingHistory } from '../models/booking/booking-history';
import { BookingState } from '../models/booking/booking-state';
import { BaseApiService } from './contracts/base-service.service';


@Injectable({
  providedIn: 'root'
})


export class BookingServiceService extends BaseApiService{
  private API_BOOKING = this.API_BASE + 'Booking'
  constructor(
    http: HttpClient
  )
  {
    super(http);
  }
  public getAllPhotographerHistory(id: number): Observable<BookingHistory[]> {
    return this.http.get<BookingHistory[]>(`${this.API_BOOKING}/photographer/${id}`);
  }

  public getAllCustomerHistory(id: number): Observable<BookingHistory[]> {
    return this.http.get<BookingHistory[]>(`${this.API_BOOKING}/customer/${id}`);
  }

  public cancelRequest(id: number): Observable<BookingState> {
    return this.http.patch<BookingState>(`${this,this.API_BOOKING}/${id}/cancel`,null)
  }

  public acceptRequest(id: number): Observable<BookingState> {
    return this.http.patch<BookingState>(`${this,this.API_BOOKING}/${id}/accept`,null)
  }

  public declineRequest(id: number): Observable<BookingState> {
    return this.http.patch<BookingState>(`${this,this.API_BOOKING}/${id}/decline`,null)
  }
}

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateBooking } from '../models/create-booking';
import { BaseApiService } from './contracts/base-service.service';
import { FormHelper } from './helpers/form-helper.service';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService extends BaseApiService{
  API_BOOKING = this.API_BASE + "Booking/"

  constructor(
    http: HttpClient,
    private formHelper: FormHelper
  ) 
  {
    super(http);
  }

  public createBooking(booking: CreateBooking): Observable<HttpResponse<any>>{
    let formData = this.formHelper.convertToFormData(booking);
    return this.http.post<HttpResponse<any>>(this.API_BOOKING, formData);
  }
}

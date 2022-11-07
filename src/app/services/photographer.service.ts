import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingConceptConfig } from '../models/booking-concept-config/booking-concept-config';
import { BaseApiService } from './contracts/base-service.service';
import { FormHelper } from './helpers/form-helper.service';

@Injectable({
  providedIn: 'root'
})
export class PhotographerService extends BaseApiService{
  API_BOOKING_CONCEPT_CONFIG = this.API_BASE + "BookingConceptConfig"

  constructor(
    http: HttpClient,
    private formHelper: FormHelper
  ) 
  {
    super(http);
  }

  public getAllPhotographerConfig(id: any) : Observable<BookingConceptConfig[]> {
    return this.http.get<BookingConceptConfig[]>(`${this.API_BOOKING_CONCEPT_CONFIG}/photographer/${id}`);
  }

  public addBookingConceptConfig(data: any): Observable<BookingConceptConfig>{
    let formData = this.formHelper.convertToFormData(data);
    return this.http.post<BookingConceptConfig>(`${this.API_BOOKING_CONCEPT_CONFIG}`, formData);
  }

  public deleteBookingConceptConfig(id: any): Observable<BookingConceptConfig>{
    return this.http.delete<BookingConceptConfig>(`${this.API_BOOKING_CONCEPT_CONFIG}/${id}`);
  }
}

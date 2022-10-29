import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from './contracts/base-service.service';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService extends BaseApiService{

  constructor(
    http: HttpClient
  ) 
  {
    super(http);
  }
}

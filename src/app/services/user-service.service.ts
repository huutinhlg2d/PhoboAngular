import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/user/user';
import { BaseApiService } from './contracts/base-service.service';
import { AuthHelper } from './helpers/auth-helper.service';
import { FormHelper } from './helpers/form-helper.service';
import {Photographer} from "../models/photographer/photographer";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService extends BaseApiService{

  private API_USER =  this.API_BASE + "User/"

  constructor(
    http: HttpClient,
    formHelper: FormHelper
  )
  {
    super(http);
  }

  public getAllEmployee(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.API_USER);
  }

  public getUserById(id:number): Observable<Photographer> {
    return this.http.get<Photographer>(this.API_USER+"id?id="+id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/user/user';
import { BaseService } from './contracts/base-service.service';
import { AuthHelper } from './helpers/auth-helper.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService extends BaseService{
  
  private API_USER =  this.API_BASE + "Users/"
  
  constructor(
    private http: HttpClient,
    helper: AuthHelper
  ) {
    super(helper);
  }

  public getAllEmployee(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.API_USER);
  }
}

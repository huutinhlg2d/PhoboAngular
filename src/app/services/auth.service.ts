import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Login } from '../models/auth/login';
import { LoginReponse } from '../models/auth/login-reponse';
import { User } from '../models/user/user';
import { BaseService } from './contracts/base-service.service';
import { AuthHelper } from './helpers/auth-helper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService{
  
  private API_AUTH = environment.apiBaseUrl + "Auth/"
  
  constructor(
    private http: HttpClient, helper : AuthHelper
  ) {
    super(helper);
  }

  public login(login : Login) : Observable<LoginReponse> {
    return this.http.post<LoginReponse>(this.API_AUTH + "login", login, {headers: super.header()})
  }
}

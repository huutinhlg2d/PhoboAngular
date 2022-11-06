import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Login } from '../models/auth/login';
import { LoginReponse } from '../models/auth/login-reponse';
import { User } from '../models/user/user';
import { BaseApiService as BaseApiService } from './contracts/base-service.service';
import { AuthHelper } from './helpers/auth-helper.service';
import { FormHelper } from './helpers/form-helper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseApiService{

  private API_AUTH = environment.apiBaseUrl + "Auth/"
  
  constructor(
    http: HttpClient,
    private formHelper: FormHelper
  ) 
  {
    super(http);
  }

  public login(login : Login) : Observable<LoginReponse> {
    let formdata = this.formHelper.convertToFormData(login);
    
    return this.http.post<LoginReponse>(this.API_AUTH + "login", formdata)
  }
}

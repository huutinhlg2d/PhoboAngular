import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../models/user/register';

import { User } from '../models/user/user';
import { BaseApiService } from './contracts/base-service.service';
import { AuthHelper } from './helpers/auth-helper.service';
import { FormHelper } from './helpers/form-helper.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService extends BaseApiService{

  private API_USER =  this.API_BASE + 'User/'
  private API_AUTH = this.API_BASE + 'Auth/'

  constructor(
    http: HttpClient,
    private formHelper: FormHelper
  )
  {
    super(http);
  }

  public getAllEmployee(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.API_USER);
  }
  public register(register : Register) : Observable<Register> {
    let formdata = this.formHelper.convertToFormData(register);
    return this.http.post<Register>(this.API_AUTH + "register", formdata)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs"
import { catchError, map, tap } from 'rxjs/operators';
import { AuthHelper } from '../helpers/auth-helper.service';
import { environment } from 'src/environments/environment';
import { FormHelper } from '../helpers/form-helper.service';
@Injectable()
export class BaseApiService {

  protected API_BASE = environment.apiBaseUrl;  

  constructor(
    protected http: HttpClient
  ) { }
 }
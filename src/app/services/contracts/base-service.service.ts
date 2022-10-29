import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs"
import { catchError, map, tap } from 'rxjs/operators';
import { AuthHelper } from '../helpers/auth-helper.service';
import { environment } from 'src/environments/environment';
@Injectable()
export class BaseService {
    constructor(private authHelper: AuthHelper) { }

    protected API_BASE = environment.apiBaseUrl;

    public extractData(res: Response) {
      let body = res.json();
      return body || {};
    }

    public header() {
      let header = new HttpHeaders({ 'Content-Type': 'application/json' });
      if(this.authHelper.isAuthenticated()) {
        header = header.append('Authorization', 'Bearer ' + this.authHelper.getToken()); 
      }
      return header;
    }

    public setToken(data:any) {
      this.authHelper.setToken(data);
    }
 }
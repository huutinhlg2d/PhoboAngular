import { Injectable } from '@angular/core';
import {BaseApiService} from "./contracts/base-service.service";
import {HttpClient} from "@angular/common/http";
import {FormHelper} from "./helpers/form-helper.service";
import {Observable} from "rxjs";
import {User} from "../models/user/user";
import {Photographer} from "../models/photographer/photographer";

@Injectable({
  providedIn: 'root'
})
export class PhotographerServiceService extends BaseApiService{

  private API_PHOTOGRAPHER =  this.API_BASE + "Photographer/"

  constructor(
    http: HttpClient,
    formHelper: FormHelper
  )
  {
    super(http);
  }

  public getAllPhotographer(): Observable<Array<Photographer>> {
    return this.http.get<Array<Photographer>>(this.API_PHOTOGRAPHER);
  }

  public getPhotographerById(id:number): Observable<Photographer> {
    return this.http.get<Photographer>(this.API_PHOTOGRAPHER+"id?id="+id);
  }
}

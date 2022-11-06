import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Concept } from '../models/concept/concept';
import { BaseApiService } from './contracts/base-service.service';
import { FormHelper } from './helpers/form-helper.service';

@Injectable({
  providedIn: 'root'
})
export class ConceptsService extends BaseApiService{

  private API_CONCEPT = this.API_BASE + "Concept/"

  constructor(
    http: HttpClient,
  ) {
    super(http);
  }

  public getAllConcept() : Observable<Concept[]> {
    return this.http.get<Concept[]>(this.API_CONCEPT);
  }
}

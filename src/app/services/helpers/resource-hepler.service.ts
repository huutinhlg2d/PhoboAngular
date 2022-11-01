import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResourceHepler {
  RESOURCE_URL: string;

  constructor() {
    this.RESOURCE_URL = environment.apiBaseUrl;
  }

  public getResoucePath(pathString: string): string{
    console.log("/" + pathString);
    return new URL("/" + pathString, this.RESOURCE_URL).href;
  }
}

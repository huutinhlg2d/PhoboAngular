import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormHelper {

  constructor() { }

  public convertToFormData(data: any) : FormData{
    let formData = new FormData();

    for(var key in data){
      formData.append(key, data[key]);
    }

    return formData;
  }
}

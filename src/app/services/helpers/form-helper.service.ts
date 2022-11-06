import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormHelper {

  constructor() { }

  public convertToFormData(data: any) : FormData{
    let formData = new FormData();
    

    for(var key in data){
      let value = data[key];

      if(value instanceof Date){
        console.log("Date " + value);
        
        value = formatDate(value, "yyyy-MM-dd", "en-US");
      }
      
      formData.append(key, value);
    }

    return formData;
  }
}

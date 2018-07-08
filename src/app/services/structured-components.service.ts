import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StructuredComponentsService {

  constructor() { }
  public fetchStructuredProducts():Promise<any> {
    return fetch("https://minsi-6be1d.firebaseio.com/Products.json")
                .then((res)=>res.json())       
  }
}

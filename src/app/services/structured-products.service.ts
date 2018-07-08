import { Injectable } from '@angular/core';
import { URLS } from '../constants/server-urls';

@Injectable({
  providedIn: 'root'
})
export class StructuredProductsService {

  constructor() { }
  public fetchStructuredProducts():Promise<any> {
    return fetch(URLS.getProducts, {mode: 'cors'})
                .then((res)=>res.json())       
  }

  public refreshProducts():Promise<any> {
    return fetch(URLS.refreshProducts).then(res=>res.json());
  }

  public getProduct(cusip: string) {
    return fetch(URLS.getProduct+cusip).then(res=>res.json());
  }

}

import { Injectable } from '@angular/core';
import { products } from '../data/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }


  public getHardcodedProducts(){
    return products;
  }

}

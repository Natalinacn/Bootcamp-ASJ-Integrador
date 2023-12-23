import { Injectable } from '@angular/core';
import { ProductsModel } from '../model/productModel';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }


  // public getHardcodedProducts(){
    // return products;
  // }

  createProduct(product : ProductsModel): void{
    try{
      const productsFromLocal: string | null = localStorage.getItem('product');

      if(productsFromLocal !== null){

        let productsString: ProductsModel[] = JSON.parse(productsFromLocal);

        productsString.push(product);

        localStorage.setItem('product', JSON.stringify(productsString));

      }else{
        const productsFromLocal: ProductsModel[] = [product];
        localStorage.setItem('product', JSON.stringify(productsFromLocal));
      }


    }catch(error){
      console.log("Error al agregar producto al localStorage: ", error);

    }

  }

  getProduct(): ProductsModel[] | null{

    try{
    const productFromLocal: string | null = localStorage.getItem('product');

    if(productFromLocal !== null){
    
        return JSON.parse(productFromLocal);
    }
    return null;
    
  }catch(error){
      console.error('Error parseando el localStorage:', error);

      return null;

    }
      
    }


}

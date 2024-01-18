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

        const uniqueId = Math.floor(Math.random() * 1000000);
        product.id = uniqueId;

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



    deleteProduct(id:number){
      try {
        //Traigo la info del LocalStorage y la guardo en providerFromLocal
        const productFromLocal: string | null =
          localStorage.getItem('product');
  
        if (productFromLocal !== null) {
          //Si el local tiene info creo una nueva variable para guardarla como Json
          let productListToJson: ProductsModel[] = JSON.parse(productFromLocal);
  
          //Filtro el id que deseo eliminar y lo guardo en la variable updateProviderList
          const updateProductList = productListToJson.filter(function (product) {
            return product.id !== id;
          });
  
          //Actualizo el localStorage con la lista filtrada
          localStorage.setItem('product', JSON.stringify(updateProductList));
  
          //Retorna la lista nueva sin el eliminado
          return updateProductList;
        }
        return null;
      } catch (error) {
        console.log('La lista de productos del LocalStorage es nula ', error);
  
        return null;
      }

    }

    
    getProductById(id: number): ProductsModel | null {
      try {
        const productFromLocal: string | null = localStorage.getItem('product');
    
        if (productFromLocal !== null) {
          const productListToJson: ProductsModel[] = JSON.parse(productFromLocal);
    
          // Acá busco el producto por su id
          const productToUpdate: ProductsModel | undefined = productListToJson.find(product => product.id === id);
    
          return productToUpdate || null;
        }
        return null;
      } catch (error) {
        console.log('Error al obtener el producto del LocalStorage: ', error);
        return null;
      }
    }
    


    updateProduct(product : ProductsModel): void{
      try{
        const productsFromLocal: string | null = localStorage.getItem('product');
  
        if(productsFromLocal !== null){
  
          let productsString: ProductsModel[] = JSON.parse(productsFromLocal);

          let indice = productsString.findIndex(function(p){
            return p.id == product.id
          })
  
          productsString[indice] = product;

          localStorage.setItem('product', JSON.stringify(productsString));
         
        }  
  
      }catch(error){
        console.log("Error al agregar producto al localStorage: ", error);
  
      }
  
    }

}


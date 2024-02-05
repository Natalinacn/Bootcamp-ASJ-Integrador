import { Pipe, PipeTransform } from '@angular/core';
import { ProductsModel } from '../model/productModel';

@Pipe({
  name: 'filterProductPipe'
})
export class FilterProductPipePipe implements PipeTransform {

  transform(products: ProductsModel[], criteria: string): ProductsModel[] {
    if(!criteria || criteria === ''){
      return products
    }
    const lowerCaseCriteria = criteria.toLowerCase();
    return products.filter(products=>
      products.productName.toLowerCase().includes(lowerCaseCriteria) ||
      products.description.toLowerCase().includes(lowerCaseCriteria) ||
      products.category.category.toLowerCase().includes(lowerCaseCriteria)
      );
    
  }


}

import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productsData: any[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    // this.productsData = this.productService.getHardcodedProducts();
    this.listProducts();
  }


  listProducts() {
    const res = this.productService.getProduct();

    console.log('respuesta del get', res);

    if (res !== null) {
      this.productsData = res;
  
  }else{
    console.error('La respuesta es nula');
  }
}


deleteProduct(id: string){

  const res = this.productService.deleteProduct(id); //Acá traigo toda la lista actualizada con el eliminado y la meto en la variable res

  console.log('respuesta del get', res);

 if (res !== null && res !== undefined) {
    this.productsData = res;
    }else{
    console.error('La respuesta es nula');
  }


}
}

import { Component } from '@angular/core';
import { ProductsModel } from 'src/app/model/productModel';
import { ProductsService } from 'src/app/services/products.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-add-form',
  templateUrl: './product-add-form.component.html',
  styleUrls: ['./product-add-form.component.css']
})
export class ProductAddFormComponent {

  product: ProductsModel = {
  id: 0,
  code: '',
  productName: '',
  category: '',
  provider: '',
  description: '',
  price: 0
  }

  constructor(private productService: ProductsService){}

  saveProduct(form:NgForm){
    if(form.valid){

      this.productService.createProduct(this.product);
    }
  }

}

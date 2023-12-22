import { Component } from '@angular/core';
import { ProductsModel } from 'src/app/model/productModel';
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

  saveProduct(form:NgForm){
    console.log(this.product);
      //Crear el metodo de guardar en el servicio
  //Llamar al servicio de proveerdr para guardar
  //Redigir a la ruta
  }

}

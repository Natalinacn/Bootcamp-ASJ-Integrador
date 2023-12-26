import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsModel } from 'src/app/model/productModel';
import { ProductsService } from 'src/app/services/products.service';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from 'src/app/modals/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-product-add-form',
  templateUrl: './product-add-form.component.html',
  styleUrls: ['./product-add-form.component.css']
})
export class ProductAddFormComponent {

  constructor(
    private productService: ProductsService,
    private modalService: NgbModal,
    private router: Router){}



  product: ProductsModel = {
  id: "0",
  code: '',
  productName: '',
  category: '',
  provider: '',
  description: '',
  price: 0
  }



  saveProduct(form:NgForm){
    if(form.valid){

      this.productService.createProduct(this.product);

      const modalRef = this.modalService.open(ConfirmationModalComponent);
      modalRef.componentInstance.message = 'Producto agregado correctamente'

      setTimeout(() =>{
        modalRef.close('timeout');
        this.router.navigate(['/productos/listado']);
      }, 3000);


      modalRef.result.then(
        (result) => {
          console.log('Modal cerrado', result);
        },
        (reason) => {
          console.log('Modal descartado', reason);
        }
      );

    }
  }

}

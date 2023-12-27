import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsModel } from 'src/app/model/productModel';
import { ProductsService } from 'src/app/services/products.service';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from 'src/app/modals/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-product-add-form',
  templateUrl: './product-add-form.component.html',
  styleUrls: ['./product-add-form.component.css'],
})
export class ProductAddFormComponent implements OnInit {
  constructor(
    private productService: ProductsService,
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  id!: string;

  product: ProductsModel = {
    id: '',
    code: '',
    productName: '',
    category: '',
    provider: '',
    description: '',
    price: 0,
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((response) => {
      let id = response.get('id');
      if (id != undefined) {
        this.id = id;
        this.product = this.productService.getProductById(id)!;
        console.log(this.product);
      }
    });
  }

  onSubmit(form: NgForm) {
    if (this.id) {
      this.updateProduct(form);
    } else {
      this.saveProduct(form);
    }
  }

  saveProduct(form: NgForm) {
    if (form.valid) {
      this.productService.createProduct(this.product);

      const modalRef = this.modalService.open(ConfirmationModalComponent);
      modalRef.componentInstance.message = 'Producto agregado correctamente';

      setTimeout(() => {
        modalRef.close('timeout');
        this.router.navigate(['/productos/listado']);
      }, 2000);

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

  updateProduct(form: NgForm) {
    if (form.valid) {
      this.productService.updateProduct(this.product);

      const modalRef = this.modalService.open(ConfirmationModalComponent);
      modalRef.componentInstance.message = 'Producto editado correctamente';

      setTimeout(() => {
        modalRef.close('timeout');
        this.router.navigate(['/productos/listado']);
      }, 2000);
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

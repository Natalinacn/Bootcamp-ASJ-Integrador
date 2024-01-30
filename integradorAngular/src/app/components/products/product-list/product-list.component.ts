import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { DeleteConfirmationModalComponent } from 'src/app/modals/delete-confirmation-modal/delete-confirmation-modal.component';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productsData: any[] = [];


  constructor(
    private productService: ProductsService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listProducts();
    this.sortProductsByProductName();
  }

  listProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.productsData = data;
    });
  }


  deleteProduct(idProduct: number) {
    const modalRef = this.modalService.open(DeleteConfirmationModalComponent);

    modalRef.componentInstance.message =
      '¿Está seguro de que desea eliminar este producto?';

    modalRef.result.then(
      (result) => {
        if (result === 'confirm') {
          console.log(result);
          console.log(idProduct);
          console.log(this.productsData);

          this.productService.deleteProduct(Number(idProduct)).subscribe(() => {
            this.listProducts();
          });
        }
      },
      (reason) => {
        console.log('Modal de confirmación cerrado sin confirmar: ', reason);
      }
    );
  }

  sortProductsByProductName() {
    this.productsData.sort((a, b) =>
      a.productName.localeCompare(b.productName)
    );
  }

  updateProduct(productId: number) {
    this.router.navigate([`/productos/formulario/${productId}`]);
  }
}

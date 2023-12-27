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
    // this.productsData = this.productService.getHardcodedProducts();
    this.listProducts();
    this.sortProductsByProductName();
  }

  listProducts() {
    const res = this.productService.getProduct();

    console.log('respuesta del get', res);

    if (res !== null) {
      this.productsData = res;
    } else {
      console.error('La respuesta es nula');
    }
  }

  deleteProduct(id: string) {
    const modalRef = this.modalService.open(DeleteConfirmationModalComponent);

    modalRef.componentInstance.message =
      '¿Está seguro de que desea eliminar este producto?';

    modalRef.result.then(
      (result) => {
        if (result === 'confirm') {
          const res = this.productService.deleteProduct(id); //Acá traigo toda la lista actualizada con el eliminado y la meto en la variable res

          if (res !== null && res !== undefined) {
            this.productsData = res;
          } else {
            console.error('La respuesta es nula');
          }
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

  updateProduct(productId: string) {
    this.router.navigate([`/productos/formulario/${productId}`]);
  }
}

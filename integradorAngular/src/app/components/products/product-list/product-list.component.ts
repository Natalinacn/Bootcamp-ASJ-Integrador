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
  criteria: string = '';


  constructor(
    private productService: ProductsService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listActivatedProducts();
    this.sortProductsByProductName();
  }

  listActivatedProducts() {
    this.productService.getActivatedProducts().subscribe((data) => {
      this.productsData = data;
    });
  }

  listDeletedProducts() {
    this.productService.getDeletedProducts().subscribe((data) => {
      this.productsData = data;
    });
  }

  listAllProducts(){
    this.productService.getAllProducts().subscribe((data)=>{
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
          this.productService.deleteProduct(Number(idProduct)).subscribe(() => {
            this.listActivatedProducts();
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

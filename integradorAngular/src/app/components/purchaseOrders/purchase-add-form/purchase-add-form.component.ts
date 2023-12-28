import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PurchaseOrdersModel } from 'src/app/model/purchaseOrderModel';
import { PurchaseOrdersService } from 'src/app/services/purchase-orders.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from 'src/app/modals/confirmation-modal/confirmation-modal.component';
import { ProvidersModel } from 'src/app/model/providerModel';
import { ProvidersService } from 'src/app/services/providers.service';
import { ProductsModel } from 'src/app/model/productModel';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-purchase-add-form',
  templateUrl: './purchase-add-form.component.html',
  styleUrls: ['./purchase-add-form.component.css']
})
export class PurchaseAddFormComponent implements OnInit{

  providers: ProvidersModel[] = []; 
  products: ProductsModel[] = [];
  
  constructor(
    private purchaseOrdersService: PurchaseOrdersService,
    private providersService: ProvidersService, 
    private productsService : ProductsService,
    private modalService: NgbModal,
    private router: Router){}

  ngOnInit(): void {
    this.providers = this.providersService.getProvider() || [];
    this.products = this.productsService.getProduct() || [];
  }

  purchaseOrder: PurchaseOrdersModel = {
  id: "0",
  OrderNumber: '',
  issueDate: new Date(), 
  deliveryDate: new Date(), 
  receptionInfo: '',
  description: '',
  provider: '',
  products: '',
  quantity: 0,
  status: true,
  totalAmount: 0
}

createPurchase(form:NgForm){

  if(form.valid){
    this.purchaseOrdersService.createPurchaseOrder(this.purchaseOrder);

          // Primero abro el modal
          const modalRef = this.modalService.open(ConfirmationModalComponent);
          modalRef.componentInstance.message = 'Órden de compra agregado correctamente';
    
          // Uso setTimeout para cerrar el modal después de 2 segundos y navegar a otra página
          setTimeout(() => {
            modalRef.close('timeout');
            this.router.navigate(['/ordenes/listado']); 
          }, 2000);
    
          // Manejo el resultado de la promesa
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



import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PurchaseOrdersModel } from 'src/app/model/purchaseOrderModel';
import { PurchaseOrdersService } from 'src/app/services/purchase-orders.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from 'src/app/modals/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-purchase-add-form',
  templateUrl: './purchase-add-form.component.html',
  styleUrls: ['./purchase-add-form.component.css']
})
export class PurchaseAddFormComponent {

  constructor(
    private purchaseOrdersService: PurchaseOrdersService,
    private modalService: NgbModal,
    private router: Router){}

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



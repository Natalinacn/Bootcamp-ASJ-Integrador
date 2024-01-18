import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { CancelConfirmationModalComponent } from 'src/app/modals/cancel-confirmation-modal/cancel-confirmation-modal.component';
import { PurchaseOrdersService } from 'src/app/services/purchase-orders.service';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css'],
})
export class PurchaseListComponent implements OnInit {
  purchaseData: any[] = [];

  constructor(
    private purchaseService: PurchaseOrdersService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.purchaseData = this.purchaseService.getHardcodedOrders();
    
    this.list();
  }

  list() {
    const res = this.purchaseService.getPurchase();

    console.log('respuesta del get', res);

    if (res !== null) {
      this.purchaseData = res;
    } else {
      console.error('La respuesta es nula');
    }
  }

  cancelPurchase(orderId: string) {
    //Usar el modal de confirmación antes de eliminar
    const modalRef = this.modalService.open(CancelConfirmationModalComponent);

    //Configuro el mensaje del modal
    modalRef.componentInstance.message =
      '¿Está seguro de que desea cancelar esta órden?';

    //Tengo que manejar la promesa del modal con el result-then
    modalRef.result.then((result) => {
        if (result === 'confirm') {
          const success= this.purchaseService.cancelPurchase(Number(orderId));

          if(success){
            this.list();
          }
                 }
      },
      (reason) => {
        console.log('Modal de confirmación cerrado sin confirmar: ', reason);
      }
    );
  }


  showDetailsPurchase(purchaseId: string) {
   
    this.router.navigate([`/ordenes/detalle/${purchaseId}`]);
  }



}

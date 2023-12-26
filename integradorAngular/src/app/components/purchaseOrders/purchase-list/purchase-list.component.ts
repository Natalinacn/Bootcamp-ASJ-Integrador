import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteConfirmationModalComponent } from 'src/app/modals/delete-confirmation-modal/delete-confirmation-modal.component';
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
    private modalService: NgbModal
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

  deletePurchase(id: string) {
    //Usar el modal de confirmación antes de eliminar
    const modalRef = this.modalService.open(DeleteConfirmationModalComponent);

    //Configuro el mensaje del modal
    modalRef.componentInstance.message =
      '¿Está seguro de que desea eliminar esta órden?';

    //Tengo que manejar la promesa del modal con el result-then
    modalRef.result.then((result) => {
        if (result === 'confirm') {
          const res = this.purchaseService.deletePurchase(id); //Acá traigo toda la lista actualizada con el eliminado y la meto en la variable res

          if (res !== null && res !== undefined) {
            this.purchaseData = res;
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
}

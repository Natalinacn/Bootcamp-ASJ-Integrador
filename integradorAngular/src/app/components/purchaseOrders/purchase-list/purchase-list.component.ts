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
  criteria: string = '';

  constructor(
    private purchaseService: PurchaseOrdersService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listPurchaseOrders();
  }

  listPurchaseOrders() {
    this.purchaseService.getPurchases().subscribe((data) => {
      this.purchaseData = data;
    });
  }

  listDeletedPurchases() {
    this.purchaseService.getDeletedPurchases().subscribe((data) => {
      this.purchaseData = data;
    });
  }

  listActivatedPurchases() {
    this.purchaseService.getActivatedPurchases().subscribe((data) => {
      this.purchaseData = data;
    });
  }

  cancelPurchase(idPurchaseOrder: number) {
    //Usar el modal de confirmación antes de eliminar
    const modalRef = this.modalService.open(CancelConfirmationModalComponent);

    //Configuro el mensaje del modal
    modalRef.componentInstance.message =
      '¿Está seguro de que desea cancelar esta órden?';

    //Tengo que manejar la promesa del modal con el result-then
    modalRef.result.then(
      (result) => {
        if (result === 'confirm') {
          const success = this.purchaseService
            .cancelPurchase(Number(idPurchaseOrder))
            .subscribe((data) => {
              this.listPurchaseOrders();
            });

          if (success) {
            this.listPurchaseOrders();
          }
        }
      },
      (reason) => {
        console.log('Modal de confirmación cerrado sin confirmar: ', reason);
      }
    );
  }

  showDetailsPurchase(idPurchaseOrder: number) {
    this.router.navigate([`/ordenes/detalle/${idPurchaseOrder}`]);
  }
}

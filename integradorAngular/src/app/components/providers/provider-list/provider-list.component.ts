import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteConfirmationModalComponent } from 'src/app/modals/delete-confirmation-modal/delete-confirmation-modal.component';
import { ProvidersModel } from 'src/app/model/providerModel';
import { ProvidersService } from 'src/app/services/providers.service';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css'],
})
export class ProviderListComponent implements OnInit {

reactivateProvider(arg0: number) {
throw new Error('Method not implemented.');
}

listDeletedProviders() {
  this.providersService.getDeletedProviders().subscribe((data)=>{
    this.providersData = data;
  });
}

listAllProviders() {
this.providersService.getAllProviders().subscribe((data)=>{
  this.providersData = data;
});
}

  providersData: ProvidersModel[] = [];
  criteria: string = '';

  constructor(
    private providersService: ProvidersService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listActivatedProviders();
  }

  listActivatedProviders() {
    console.log('Criteria:', this.criteria);
    //COnsumir los datos del observable (suscribirnos)
    this.providersService.getActivatedProviders().subscribe((data) => {
      this.providersData = data;
    });
  }

  deleteProvider(idProvider: number) {
    const modalRef = this.modalService.open(DeleteConfirmationModalComponent);

    modalRef.componentInstance.message =
      '¿Está seguro de que desea eliminar este proveedor?';

    modalRef.result.then(
      (result) => {
        if (result === 'confirm') {
          this.providersService.deleteProvider(Number(idProvider)).subscribe(() => {
            this.listActivatedProviders();
          });
        }
      },
      (reason) => {
        console.log('Modal de confirmación cerrado sin confirmar: ', reason);
      }
    );
  }
  
  updateProvider(idProvider: number) {
    this.router.navigate([`/proveedores/formulario/${idProvider}`]);
  }


}

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
  providersData: ProvidersModel[] = [];

  constructor(
    private providersService: ProvidersService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listProviders(); //Este es el que va con observables FINAL
  }

  listProviders() {
    //COnsumir los datos del observable (suscribirnos)
    this.providersService.getProviders().subscribe((data) => {
      this.providersData = data;
    });
  }

  deleteProvider(id: number) {
    //Abro el modal
    const modalRef = this.modalService.open(DeleteConfirmationModalComponent);

    //Le pongo el mensaje
    modalRef.componentInstance.message =
      '¿Está seguro de que desea eliminar este proveedor?';

    //Manejar la promesa
    modalRef.result.then(
      (result) => {
        if (result === 'confirm') {
          const res = this.providersService.deleteProvider(id); //Acá traigo toda la lista actualizada con el eliminado y la meto en la variable res

          if (res !== null && res !== undefined) {
            this.providersData = res;
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

  updateProvider(idProvider: number) {
    this.router.navigate([`/proveedores/formulario/${idProvider}`]);
  }
}

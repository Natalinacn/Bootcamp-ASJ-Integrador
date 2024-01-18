import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProvidersModel } from 'src/app/model/providerModel';
import { NgForm } from '@angular/forms';
import { ProvidersService } from 'src/app/services/providers.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from 'src/app/modals/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-provider-add-form',
  templateUrl: './provider-add-form.component.html',
  styleUrls: ['./provider-add-form.component.css'],
})
export class ProviderAddFormComponent implements OnInit {
  constructor(
    private providerService: ProvidersService,
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  id!: string;

  provider: ProvidersModel = {
    id: 0,
    providerCode: '',
    businessName: '',
    industry: '',
    address: {
      streetAndNumber: '',
      postalCode: '',
      locality: '',
      city: '',
      province: '',
      country: '',
    },
    contact: {
      website: '',
      phone: '',
      email: '',
    },
    fiscalData: {
      cuit: '',
      taxCondition: '',
    },
    responsiblePerson: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      role: '',
    },
    created_at: undefined,
    updated_at: undefined,
    deleted_at: undefined,
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((response) => {
      let id = response.get('id');
      if (id != undefined) {
        this.id = id;
        this.provider = this.providerService.getPoviderById(Number(id))!;
        console.log(this.provider);
      }
    });
  }

  createProvider(form: NgForm): void {
    if (form.valid) {
      this.providerService.createProvider(this.provider);

      // Primero abro el modal
      const modalRef = this.modalService.open(ConfirmationModalComponent);
      modalRef.componentInstance.message = 'Proveedor agregado correctamente';

      // Uso setTimeout para cerrar el modal después de 3 segundos y navegar a otra página
      setTimeout(() => {
        modalRef.close('timeout');
        this.router.navigate(['/proveedores/listado']);
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

  onSubmit(form: NgForm) {
    if (this.id) {
      this.updateProvider(form);
    } else {
      this.createProvider(form);
    }
  }

  updateProvider(form: NgForm) {
    if (form.valid) {
      this.providerService.updateProvider(this.provider);

      const modalRef = this.modalService.open(ConfirmationModalComponent);
      modalRef.componentInstance.message = 'Proveedor editado correctamente';

      setTimeout(() => {
        modalRef.close('timeout');
        this.router.navigate(['/proveedores/listado']);
      }, 2000);
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

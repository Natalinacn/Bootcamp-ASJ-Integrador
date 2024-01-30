import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProvidersModel } from 'src/app/model/providerModel';
import { NgForm } from '@angular/forms';
import { ProvidersService } from 'src/app/services/providers.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from 'src/app/modals/confirmation-modal/confirmation-modal.component';
import { Industry } from 'src/app/model/industryModel';
import { Country } from 'src/app/model/countryModel';
import { IvaConditionModel } from 'src/app/model/ivaConditionModel';
import { Province } from 'src/app/model/provinceModel';

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
  industriesData: Industry[] = [];
  countriesData: Country[] = [];
  provinceData: Province[] = [];
  ivaConditionsData: IvaConditionModel[] = [];

  provider: ProvidersModel = {
    idProvider: 0,
    providerCode: '',
    businessName: '',
    cuit: '',
    website: '',
    phone: '',
    email: '',
    industry: {
      idIndustry: 0,
      industry: '',
    },
    address: {
      idAddress: 0,
      streetAndNumber: '',
      postalCode: '',
      city: {
        idCity: 0,
        city: '',
        province: {
          idProvince: 0,
          province: '',
          country: {
            idCountry: 0,
            country: '',
          },
        },
      },
    },
    IvaCondition: {
      idIvaCondition: 0,
      ivaCondition: '',
    },
    responsiblePerson: {
      idResponsiblePerson: 0,
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
        // this.provider = this.providerService.getPoviderById(Number(id))!;
        console.log(this.provider);
      }
    });
    this.listIndustries();
    this.listCountries();
    this.listProvinces();
    this.listIvaConditions();
  }

  createProvider(form: NgForm) {
    if (form.valid) {
      this.providerService.createProvider(this.provider).subscribe(() => {
        console.log('Provider en el CREATE', this.provider);
      });

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
      this.providerService
        .updateProvider(this.provider.idProvider, this.provider)
        .subscribe(() => {
          console.log(
            'Provider en el UPDATE actualizado correctamente',
            this.provider
          );
        });

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

  listIndustries() {
    this.providerService.getIndustries().subscribe((data) => {
      this.industriesData = data;
    });
  }

  listCountries() {
    this.providerService.getCountries().subscribe((data) => {
      this.countriesData = data;
    });
  }

  listProvinces() {
    this.providerService.getProvinces().subscribe((data) => {
      this.provinceData = data;
    });
  }

  listIvaConditions() {
    this.providerService.getIvaConditions().subscribe((data)=>{
      this.ivaConditionsData = data;
    });
  }
}

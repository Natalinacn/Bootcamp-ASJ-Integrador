import { Component } from '@angular/core';
import { ProvidersModel } from 'src/app/model/providerModel';
import { NgForm } from '@angular/forms';
import { ProvidersService } from 'src/app/services/providers.service';

@Component({
  selector: 'app-provider-add-form',
  templateUrl: './provider-add-form.component.html',
  styleUrls: ['./provider-add-form.component.css'],
})
export class ProviderAddFormComponent {
  constructor(private providerService: ProvidersService) {}

  provider: ProvidersModel = {
    id: 0,
    providerCode: "",
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
  };

  createProvider(form: NgForm): void {
    if (form.valid) {
      this.providerService.createProvider(this.provider);

    }
  }
}

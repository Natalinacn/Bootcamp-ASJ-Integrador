import { Component } from '@angular/core';
import { ProvidersModel } from 'src/app/model/providerModel';
import { NgForm } from '@angular/forms';
import { ProvidersService } from 'src/app/services/providers.service';


@Component({
  selector: 'app-provider-add-form',
  templateUrl: './provider-add-form.component.html',
  styleUrls: ['./provider-add-form.component.css']
})
export class ProviderAddFormComponent {

  constructor( private providerService: ProvidersService){}
  

  provider: ProvidersModel ={

    id: 0,
    razonSocial: '',
    rubro: '',
    calleYAltura: '',
    cp: '',
    localidad: '',
    ciudad: '',
    provincia: '',
    pais: '',
    web: '',
    telefono: '',
    email: '',
    cuit: '',
    condicionIva: '',
    personaResponsable: {
      nombreResp: '',
      apellidoResp: '',
      telefonoResp: '',
      emailResp: '',
      rolResp: '',
    }
  }



  saveProvider(form:NgForm): void{

    if(form.valid){

      this.providerService.saveProviderOnLocalStorage(this.provider);

    }
   
  console.log(this.provider);
  //Crear el metodo de guardar en el servicio
  //Llamar al servicio de proveerdr para guardar
  //Redigir a la ruta

  
  }

}

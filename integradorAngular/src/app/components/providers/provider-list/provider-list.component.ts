import { Component, OnInit } from '@angular/core';
import { ProvidersModel } from 'src/app/model/providerModel';
import { ProvidersService } from 'src/app/services/providers.service';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css'],
})
export class ProviderListComponent implements OnInit {
  providersData: ProvidersModel[] | null = [];

  constructor(public providersService: ProvidersService) {}

  ngOnInit(): void {
    this.list();

    // this.providersData = this.providersService.getHardcodedProviders();

  }

  // list(){
  //   this.providersService.getProvider().suscribe((res) =>{
  //     console.log("respuesta del get" + res);
  //     this.providersData = res.data;
  //   })

  //   }
  // }


  list() {
    const res = this.providersService.getProvider();

    console.log('respuesta del get', res);

    if (res !== null) {
      this.providersData = res;
  
  }else{
    console.error('La respuesta es nula');
  }
}
}

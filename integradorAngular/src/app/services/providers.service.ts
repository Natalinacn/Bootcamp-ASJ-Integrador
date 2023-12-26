import { Injectable, Provider } from '@angular/core';
import { ProvidersModel } from '../model/providerModel';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor() { }

  // public getHardcodedProviders(){

  //   // return providers;

    
  // } 


  // saveProviderOnLocalStorage(provider: ProvidersModel):void{

  //   let providerFromLocal: ProvidersModel[] = localStorage.getItem("provider"); //Obtengo los proveedores guardados en el LocalStogage

  //   if(providerFromLocal){

  //     JSON.parse(providerFromLocal);
      
  //   }

  // }



  createProvider(provider: ProvidersModel): void {

    try{
    const providerFromLocal: string | null = localStorage.getItem('providers');
  
    if (providerFromLocal !== null) {
      let providersFromLocal: ProvidersModel[] = JSON.parse(providerFromLocal);
  
      providersFromLocal.push(provider);

      localStorage.setItem('providers', JSON.stringify(providersFromLocal));


    } else {
      const providersFromLocal: ProvidersModel[] = [provider];
      localStorage.setItem('providers', JSON.stringify(providersFromLocal));
    }

  }catch(error){
    console.log('Error al agregar proveedor al localStorage: ', error);

  }
}



  getProvider(): ProvidersModel[] | null{

    try{
    const providerFromLocal: string | null = localStorage.getItem('providers');

    if(providerFromLocal !== null){
    
        return JSON.parse(providerFromLocal);
    }
    return null;
    
  }catch(error){
      console.error('Error parseando el localStorage:', error);

      return null;

    }
      
    }

    
  // deleteProvider(id: string){

  //   const providerFromLocal: string | null = localStorage.getItem('providers');
    
  //   if()

  // }


  

  updateProvider(){

  }

  
  }


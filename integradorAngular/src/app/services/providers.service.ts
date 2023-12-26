import { Injectable, Provider } from '@angular/core';
import { ProvidersModel } from '../model/providerModel';

@Injectable({
  providedIn: 'root',
})
export class ProvidersService {
  constructor() {}

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
    try {
      const providerFromLocal: string | null =
        localStorage.getItem('providers');

      if (providerFromLocal !== null) {
        let providersFromLocal: ProvidersModel[] =
          JSON.parse(providerFromLocal);

        const uniqueId = crypto.randomUUID();
        provider.id = uniqueId;

        console.log(provider);

        providersFromLocal.push(provider);

        localStorage.setItem('providers', JSON.stringify(providersFromLocal));
      } else {
        const providersFromLocal: ProvidersModel[] = [provider];
        localStorage.setItem('providers', JSON.stringify(providersFromLocal));
      }
    } catch (error) {
      console.log('Error al agregar proveedor al localStorage: ', error);
    }
  }

  getProvider(): ProvidersModel[] | null {
    try {
      const providerFromLocal: string | null =
        localStorage.getItem('providers');

      if (providerFromLocal !== null) {
        return JSON.parse(providerFromLocal);
      }
      return null;
    } catch (error) {
      console.error('Error parseando el localStorage:', error);

      return null;
    }
  }

  deleteProvider(id: string) {
    try {
      //Traigo la info del LocalStorage y la guardo en providerFromLocal
      const providerFromLocal: string | null =
        localStorage.getItem('providers');

      if (providerFromLocal !== null) {
        //Si el local tiene info creo una nueva variable para guardarla como Json
        let providersListToJson: ProvidersModel[] = JSON.parse(providerFromLocal);

        //Filtro el id que deseo eliminar y lo guardo en la variable updateProviderList
        const updateProviderList = providersListToJson.filter(function (provider) {
          return provider.id !== id;
        });

        //Actualizo el localStorage con la lista filtrada
        localStorage.setItem('providers', JSON.stringify(updateProviderList));

        //Retorna la lista nueva sin el eliminado
        return updateProviderList;
      }
      return null;
    } catch (error) {
      console.log('La lista de proveedores del LocalStorage es nula ', error);

      return null;
    }
  }

  updateProvider() {}
}

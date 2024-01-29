import { HttpClient } from '@angular/common/http'; //Importo el modulo http
import { Injectable } from '@angular/core';
import { ProvidersModel } from '../model/providerModel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProvidersService {


  
  constructor(
        //Traigo el parámetro http para realizar las peticiones
        private clienteHttp: HttpClient
  ) {}

    //Agrego la url de mi endpoint
  private baseUrl = "http://localhost:8080/proveedores";


  //Creo el método getProviders ----> Reemplazar luego el nombre por getProviders
  getProviders(): Observable<ProvidersModel[]>{
    const url = `${this.baseUrl}/listado`;
    return this.clienteHttp.get<ProvidersModel[]>(url);
  }




  createProvider(provider: ProvidersModel): void {
    try {
      const providerFromLocal: string | null =
        localStorage.getItem('providers');

      if (providerFromLocal !== null) {
        let providersFromLocal: ProvidersModel[] =
          JSON.parse(providerFromLocal);

          const uniqueId = Math.floor(Math.random() * 1000000); 
          provider.idProvider = uniqueId;

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

  // getProvider(): ProvidersModel[] | null {
  //   try {
  //     const providerFromLocal: string | null =
  //       localStorage.getItem('providers');

  //     if (providerFromLocal !== null) {
  //       // return JSON.parse(providerFromLocal);
  //       const providers = JSON.parse(providerFromLocal);
  //       console.log('Lista de proveedores en el servicio:', providers);
  //       return providers;
  //     }
  //     return null;
  //   } catch (error) {
  //     console.error('Error parseando el localStorage:', error);

  //     return null;
  //   }
  // }



  deleteProvider(id: number) {
    try {
      //Traigo la info del LocalStorage y la guardo en providerFromLocal
      const providerFromLocal: string | null =
        localStorage.getItem('providers');

      if (providerFromLocal !== null) {
        //Si el local tiene info creo una nueva variable para guardarla como Json
        let providersListToJson: ProvidersModel[] = JSON.parse(providerFromLocal);

        //Filtro el id que deseo eliminar y lo guardo en la variable updateProviderList
        const updateProviderList = providersListToJson.filter(function (provider) {
          return provider.idProvider !== id;
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

  getPoviderById(id: number): ProvidersModel | null {
    try {
      const providerFromLocal: string | null = localStorage.getItem('providers');
  
      if (providerFromLocal !== null) {
        const providerListToJson: ProvidersModel[] = JSON.parse(providerFromLocal);
  
        const providerToUpdate: ProvidersModel | undefined = providerListToJson.find(provider => provider.idProvider === id);
  
        return providerToUpdate || null;
      }
      return null;
    } catch (error) {
      console.log('Error al obtener el proveedor del LocalStorage: ', error);
      return null;
    }
  }
  


  updateProvider(provider : ProvidersModel): void{
    try{
      const providerFromLocal: string | null = localStorage.getItem('providers');

      if(providerFromLocal !== null){

        let providerString: ProvidersModel[] = JSON.parse(providerFromLocal);

        let indice = providerString.findIndex(function(p){
          return p.idProvider == provider.idProvider
        })

        providerString[indice] = provider;

        localStorage.setItem('providers', JSON.stringify(providerString));
       
      }  

    }catch(error){
      console.log("Error al agregar proveedor al localStorage: ", error);

    }

  }

}

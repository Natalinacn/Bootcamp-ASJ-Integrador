import { HttpClient } from '@angular/common/http'; //Importo el modulo http
import { Injectable, Provider } from '@angular/core';
import { ProvidersModel } from '../model/providerModel';
import { Industry } from '../model/industryModel';
import { Observable, catchError, throwError } from 'rxjs';
import { Province } from '../model/provinceModel';
import { Country } from '../model/countryModel';
import { IvaConditionModel } from '../model/ivaConditionModel';

@Injectable({
  providedIn: 'root',
})
export class ProvidersService {
  constructor(
    //Traigo el parámetro http para realizar las peticiones
    private clienteHttp: HttpClient
  ) {}

  //Agrego la url de mi endpoint
  private baseUrl = 'http://localhost:8080/proveedores';

  //Creo el método getProviders ----> Reemplazar luego el nombre por getProviders
  getActivatedProviders(): Observable<ProvidersModel[]> {
    const url = `${this.baseUrl}/listado`;
    return this.clienteHttp.get<ProvidersModel[]>(url);
  }

  // createProvider(provider: ProvidersModel): Observable<ProvidersModel> {
  //   console.log(provider);
  //   const url = this.baseUrl + '/formulario';
  //   return this.clienteHttp.post<ProvidersModel>(url, provider);
  // }

  createProvider(provider: ProvidersModel): Observable<string> {
    const url = this.baseUrl + '/formulario';
    return this.clienteHttp.post<string>(url, provider).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  deleteProvider(idProvider: number): Observable<Provider> {
    const url = `${this.baseUrl}/${idProvider}`;

    return this.clienteHttp.delete<Provider>(url).pipe(
      catchError((error) => {
        const errorMessage = 'Error al eliminar el proveedor';
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  getPoviderById(idProvider: number): Observable<ProvidersModel> {
    const url = `${this.baseUrl}/${idProvider}`;

    return this.clienteHttp.get<ProvidersModel>(url).pipe(
      catchError((error) => {
        const errorMessage = 'Error al obtener el proveedor';
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  updateProvider(
    idProvider: number,
    provider: ProvidersModel
  ): Observable<ProvidersModel> {
    const url = `${this.baseUrl}/actualizar/${idProvider}`;

    return this.clienteHttp.put<ProvidersModel>(url, provider).pipe(
      catchError((error) => {
        const errorMessage = 'Error al actualizar el proveedor';
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  getIndustries(): Observable<Industry[]> {
    const url = 'http://localhost:8080/industrias/listadoActivas';
    return this.clienteHttp.get<Industry[]>(url);
  }

  getProvinces(): Observable<Province[]> {
    const url = 'http://localhost:8080/provincias/listado';
    return this.clienteHttp.get<Province[]>(url);
  }

  getCountries(): Observable<Country[]> {
    const url = 'http://localhost:8080/paises/listado';
    return this.clienteHttp.get<Country[]>(url);
  }

  getIvaConditions(): Observable<IvaConditionModel[]> {
    const url = 'http://localhost:8080/iva/listado';
    return this.clienteHttp.get<IvaConditionModel[]>(url);
  }


  getAllProviders(): Observable<ProvidersModel[]>{
    const url = this.baseUrl + '/listadoTotal';
    return this.clienteHttp.get<ProvidersModel[]>(url);
  }

  getDeletedProviders(): Observable<ProvidersModel[]>{
    const url = this.baseUrl + '/listadoEliminados';
    return this.clienteHttp.get<ProvidersModel[]>(url);
  }
  
  getProvincesByCountry(idCountry: number): Observable<Province[]>{
    const url = `http://localhost:8080/provincias/paises/${idCountry}`;
    return this.clienteHttp.get<Province[]>(url);
  }
  
}

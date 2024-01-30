import { HttpClient } from '@angular/common/http'; //Importo el modulo http
import { Injectable, Provider } from '@angular/core';
import { ProvidersModel } from '../model/providerModel';
import { Industry } from '../model/industryModel'
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
  getProviders(): Observable<ProvidersModel[]> {
    const url = `${this.baseUrl}/listado`;
    return this.clienteHttp.get<ProvidersModel[]>(url);
  }

  createProvider(provider: ProvidersModel): Observable<ProvidersModel> {
    console.log(provider);
    const url = this.baseUrl + '/formulario';
    return this.clienteHttp.post<ProvidersModel>(url, provider);
  }

  deleteProvider(idProvider: number): Observable<Provider>{
    const url = `${this.baseUrl}/${idProvider}`;

    return this.clienteHttp.delete<Provider>(url).pipe(
      catchError((error) => {
        const errorMessage = 'Error al eliminar el proveedor';
        return throwError(() => new Error(errorMessage));
      })
    );

  }

  getPoviderById(idProvider: number): Observable<Provider> {
    const url = `${this.baseUrl}/${idProvider}`;

    return this.clienteHttp.get<Provider>(url).pipe(
      catchError((error) => {
        const errorMessage = 'Error al obtener el proveedor';
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  updateProvider(idProvider: number, provider: ProvidersModel): Observable<Provider>{
    const url = `${this.baseUrl}/actualizar/${idProvider}`;

    return this.clienteHttp.put<Provider>(url, provider).pipe(
      catchError((error) => {
        const errorMessage = 'Error al actualizar el proveedor';
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  getIndustries(): Observable<Industry[]>{
    const url = 'http://localhost:8080/industrias/listado';
    return this.clienteHttp.get<Industry[]>(url);
  }

  getProvinces(): Observable<Province[]>{
    const url = 'http://localhost:8080/provincias/listado';
    return this.clienteHttp.get<Province[]>(url);
  }

  getCountries(): Observable<Country[]>{
    const url = 'http://localhost:8080/paises/listado';
    return this.clienteHttp.get<Country[]>(url);
  }

  getIvaConditions(): Observable<IvaConditionModel[]>{
    const url = 'http://localhost:8080/iva/listado';
    return this.clienteHttp.get<IvaConditionModel[]>(url);
  }
}

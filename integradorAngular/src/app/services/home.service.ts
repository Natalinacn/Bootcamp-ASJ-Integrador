import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private baseUrl = 'http://localhost:8080';

  constructor(private clienteHttp: HttpClient) {}

  getProductQuantity(): Observable<number> {
    const url = this.baseUrl + '/productos/cantidad';
    return this.clienteHttp.get<number>(url);
  }

  getProviderQuantity(): Observable<number> {
    const url = this.baseUrl + '/proveedores/cantidad';
    return this.clienteHttp.get<number>(url);
  }

  getPurchaseQuantity(): Observable<number> {
    const url = this.baseUrl + '/ordenes/cantidad';
    return this.clienteHttp.get<number>(url);
  }


}

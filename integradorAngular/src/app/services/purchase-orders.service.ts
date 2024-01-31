import { Injectable } from '@angular/core';
import { PurchaseOrdersModel } from '../model/purchaseOrderModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PurchaseOrdersService {
  private purchaseOrders: PurchaseOrdersModel[] = [];

  constructor(private clienteHttp: HttpClient) {}

  private baseUrl = 'http://localhost:8080/ordenes';

  getPurchase(): Observable<PurchaseOrdersModel[]> {
    const url = `${this.baseUrl}/listado`;
    return this.clienteHttp.get<PurchaseOrdersModel[]>(url);
  }

  getPurchaseOrderById(
    idPurchaseOrder: number
  ): Observable<PurchaseOrdersModel> {
    const url = `${this.baseUrl}/${idPurchaseOrder}`;
    return this.clienteHttp.get<PurchaseOrdersModel>(url);
  }

  createPurchaseOrder(
    purchaseOrder: PurchaseOrdersModel
  ): Observable<PurchaseOrdersModel> {
    const url = this.baseUrl + '/formulario';
    return this.clienteHttp.post<PurchaseOrdersModel>(url, purchaseOrder);
  }

  cancelPurchase(idPurchaseOrder: number): Observable<PurchaseOrdersModel> {
    const url = `${this.baseUrl}/${idPurchaseOrder}`;
    return this.clienteHttp.delete<PurchaseOrdersModel>(url);
  }
}

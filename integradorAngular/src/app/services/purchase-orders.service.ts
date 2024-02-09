import { Injectable } from '@angular/core';
import { ProductOrderModel, PurchaseOrdersModel } from '../model/purchaseOrderModel';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { OrderDetailModel } from '../model/orderDetail';

@Injectable({
  providedIn: 'root',
})
export class PurchaseOrdersService {
  private purchaseOrders: PurchaseOrdersModel[] = [];

  constructor(private clienteHttp: HttpClient) {}

  private baseUrl = 'http://localhost:8080/ordenes';

  getPurchases(): Observable<PurchaseOrdersModel[]> {
    const url = `${this.baseUrl}/listado`;
    return this.clienteHttp.get<PurchaseOrdersModel[]>(url).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  getActivatedPurchases(): Observable<PurchaseOrdersModel[]>{
    const url = `${this.baseUrl}/listadoActivos`;
    return this.clienteHttp.get<PurchaseOrdersModel[]>(url).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }


  getDeletedPurchases(): Observable<PurchaseOrdersModel[]>{
    const url = `${this.baseUrl}/listadoEliminados`;
    return this.clienteHttp.get<PurchaseOrdersModel[]>(url).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  getPurchaseOrderById(
    idPurchaseOrder: number
  ): Observable<PurchaseOrdersModel> {
    const url = `${this.baseUrl}/${idPurchaseOrder}`;
    return this.clienteHttp.get<PurchaseOrdersModel>(url);
  }

  createPurchaseOrder(
    purchaseOrder: PurchaseOrdersModel,
  ): Observable<string> {
    const url = this.baseUrl + '/formulario';
    return this.clienteHttp.post<string>(url, purchaseOrder).pipe(
      catchError((error) => {
        return throwError(error); // Propaga el error recibido del servidor
      })
    );
  }

  createOrderDetail(productsDetails: OrderDetailModel): Observable<OrderDetailModel>{
    const url = 'http://localhost:8080/detalle/crear'
    return this.clienteHttp.post<OrderDetailModel>(url, productsDetails);
  }

  cancelPurchase(idPurchaseOrder: number): Observable<PurchaseOrdersModel> {
    const url = `${this.baseUrl}/${idPurchaseOrder}`;
    return this.clienteHttp.delete<PurchaseOrdersModel>(url);
  }

  getOrderDetails(): Observable<OrderDetailModel[]>{
    const url = 'http://localhost:8080/detalle/listado';
    return this.clienteHttp.get<OrderDetailModel[]>(url);
  }

}

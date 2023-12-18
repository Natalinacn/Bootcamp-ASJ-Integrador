import { Injectable } from '@angular/core';
import { purchaseOrders } from '../data/purchaseOrders';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrdersService {

  constructor() { }

  public getHardcodedOrders(){

    return purchaseOrders;


  }


}

import { Injectable } from '@angular/core';
import { PurchaseOrdersModel } from '../model/purchaseOrderModel';

@Injectable({
  providedIn: 'root',
})
export class PurchaseOrdersService {
  constructor() {}

  // public getHardcodedOrders(){

  //   return purchaseOrders;

  // }

  createPuchaseOrder(purchaseOrder: PurchaseOrdersModel): void {
    try {
      const purchaseFromLocal: string | null =
        localStorage.getItem('puchaseOrders');

      if (purchaseFromLocal !== null) {
        let purchaseString: PurchaseOrdersModel[] =
          JSON.parse(purchaseFromLocal);

        purchaseString.push(purchaseOrder);

        localStorage.setItem(
          'puchaseOrders',
          JSON.stringify(purchaseString));
      }else{
        const purchaseFromLocal: PurchaseOrdersModel[] = [purchaseOrder];
        localStorage.setItem('puchaseOrders', JSON.stringify(purchaseFromLocal));
      }
    } catch (error) {
      console.log(
        'Error al agregar la orden de compra al localStorage: ',
        error
      );
    }
  }


  getPurchase(): PurchaseOrdersModel[] | null{
    try{
      const purchaseFromLocal: string | null = localStorage.getItem('puchaseOrders');

      if(purchaseFromLocal !== null){

        return JSON.parse(purchaseFromLocal);
      }
      return null;

    }catch(error){
      console.error('Error parseando el localStorage:', error);

      return null;
    }
  }

}

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

  createPurchaseOrder(purchaseOrder: PurchaseOrdersModel): void {
    try {
      const purchaseFromLocal: string | null =
        localStorage.getItem('purchaseOrders');

      if (purchaseFromLocal !== null) {
        let purchaseString: PurchaseOrdersModel[] =
          JSON.parse(purchaseFromLocal);

          const uniqueId = crypto.randomUUID();
          purchaseOrder.id = uniqueId;

        purchaseString.push(purchaseOrder);

        localStorage.setItem(
          'purchaseOrders',
          JSON.stringify(purchaseString));
      }else{
        const purchaseFromLocal: PurchaseOrdersModel[] = [purchaseOrder];
        localStorage.setItem('purchaseOrders', JSON.stringify(purchaseFromLocal));
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
      const purchaseFromLocal: string | null = localStorage.getItem('purchaseOrders');

      if(purchaseFromLocal !== null){

        return JSON.parse(purchaseFromLocal);
      }
      return null;

    }catch(error){
      console.error('Error parseando el localStorage:', error);

      return null;
    }
  }

  // cancelPurchase(id: string) {
  //   try {
  //     //Traigo la info del LocalStorage y la guardo en providerFromLocal
  //     const purchaseFromLocal: string | null =
  //       localStorage.getItem('purchaseOrders');

  //     if (purchaseFromLocal !== null) {
  //       //Si el local tiene info creo una nueva variable para guardarla como Json
  //       let purchaseListToJson: PurchaseOrdersModel[] = JSON.parse(purchaseFromLocal);

  //       //Filtro el id que deseo eliminar y lo guardo en la variable updateProviderList
  //       const updatePurchaseList = purchaseListToJson.filter(function (purchase) {
  //         return purchase.id !== id;
  //       });

  //       //Actualizo el localStorage con la lista filtrada
  //       localStorage.setItem('purchaseOrders', JSON.stringify(updatePurchaseList));

  //       //Retorna la lista nueva sin el eliminado
  //       return updatePurchaseList;
  //     }
  //     return null;
  //   } catch (error) {
  //     console.log('La lista de órdenes del LocalStorage es nula ', error);

  //     return null;
  //   }
  // }

  cancelPurchase(id: string): PurchaseOrdersModel[] | null {
    try {
      // Traigo la información del LocalStorage y la guardo en purchaseFromLocal
      const purchaseFromLocal: string | null = localStorage.getItem('purchaseOrders');
  
      if (purchaseFromLocal !== null) {
        // Si el localStorage tiene información, creo una nueva variable para guardarla como JSON
        let purchaseListToJson: PurchaseOrdersModel[] = JSON.parse(purchaseFromLocal);
  
        // Busco la orden de compra con el ID proporcionado
        const purchaseToCancelIndex = purchaseListToJson.findIndex(purchase => purchase.id === id);
  
        if (purchaseToCancelIndex !== -1) {
          // Establezco el estado de la orden de compra como 'false'
          purchaseListToJson[purchaseToCancelIndex].status = false;
  
          // Actualizo el localStorage con la lista modificada
          localStorage.setItem('purchaseOrders', JSON.stringify(purchaseListToJson));
  
          // Retorno la lista actualizada
          return purchaseListToJson;
        }
      }
  
      // Si no se encuentra la orden de compra con el ID, o si el localStorage es nulo, retorno null
      return null;
    } catch (error) {
      console.log('Error al cancelar la orden de compra en el LocalStorage:', error);
      return null;
    }
  }
  

}



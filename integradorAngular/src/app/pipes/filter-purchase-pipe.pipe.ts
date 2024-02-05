import { Pipe, PipeTransform } from '@angular/core';
import { PurchaseOrdersModel } from '../model/purchaseOrderModel';

@Pipe({
  name: 'filterPurchasePipe',
})
export class FilterPurchasePipePipe implements PipeTransform {
  transform(
    purchases: PurchaseOrdersModel[],
    criteria: string
  ): PurchaseOrdersModel[] {
    if (!criteria || criteria === '') {
      return purchases;
    }
    const lowerCaseCriteria = criteria.toLowerCase();
    return purchases.filter((purchase) =>
      purchase.status.toString().toLowerCase().includes(lowerCaseCriteria) ||
      purchase.orderNumber.toLowerCase().includes(lowerCaseCriteria) ||
      purchase.provider.businessName.toLowerCase().includes(lowerCaseCriteria)
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { PurchaseOrdersService } from 'src/app/services/purchase-orders.service';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit{


  purchaseData: any[] = [];

  constructor(public purchaseService : PurchaseOrdersService){};

  ngOnInit(): void {
    // this.purchaseData = this.purchaseService.getHardcodedOrders();
    this.list();
  }

  list() {
    const res = this.purchaseService.getPurchase();

    console.log('respuesta del get', res);

    if (res !== null) {
      this.purchaseData = res;
  
  }else{
    console.error('La respuesta es nula');
  }
}
  

}

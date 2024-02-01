import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailModel } from 'src/app/model/orderDetail';
import { PurchaseOrdersModel } from 'src/app/model/purchaseOrderModel';
import { PurchaseOrdersService } from 'src/app/services/purchase-orders.service';

@Component({
  selector: 'app-purchase-detail',
  templateUrl: './purchase-detail.component.html',
  styleUrls: ['./purchase-detail.component.css']
})
export class PurchaseDetailComponent implements OnInit{
  public purchase: PurchaseOrdersModel | undefined;

  id:string="";
  addedProducts: OrderDetailModel [] = [];

  constructor(
    private route: ActivatedRoute,
    private purchaseOrdersService: PurchaseOrdersService
  ) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const orderId = params.get('id');
      if (orderId) {
        this.purchaseOrdersService.getPurchaseOrderById(Number(orderId));
        console.log(this.purchase);
      }
    });

    

  }

  // orderDetail: OrderDetailModel ={
  //   idOrderDetail: 0,
  //   quantity: 0,
  //   price: 0,
	//   product: ProductOrderModel[],
  //   purchaseOrder: PurchaseOrdersModel = {},
  //   createdAt: undefined,
  //   updatedAt: undefined,
  // }

}

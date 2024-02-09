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
      const idPurchaseOrder = params.get('idPurchaseOrder');
      if (idPurchaseOrder) {
        this.getPurchaseOrderById(Number(idPurchaseOrder));
      }
    });
  

    
    this.route.paramMap.subscribe((response) => {
      let id = response.get('id');
      if (id !== null && !isNaN(Number(id))) {
        this.id = id;
        this.getPurchaseOrderById(Number(id))!;
      }
    });

    

  }

  // orderDetail: OrderDetailModel ={
  //   idOrderDetail: 0,
  //   quantity: 0,
  //   price: 0,
	//   product: {
  //     idProduct: 0,
  //     code: '',
  //     productName: '',
  //     category: {
  //       categoryId: 0,
  //       category: '',
  //     },
  //     provider:{
  //     idProvider: 0,
  //     providerCode: '',
  //     businessName: '',
  //     cuit: '',
  //     website: '',
  //     phone: '',
  //     email: '',
  //     industry: {
  //       idIndustry: 0,
  //       industry: '',
  //     },
  //     address: {
  //       idAddress: 0,
  //       streetAndNumber: '',
  //       postalCode: '',
  //       city: {
  //         idCity: 0,
  //         city: '',
  //         province: {
  //           idProvince: 0,
  //           province: '',
  //           country: {
  //             idCountry: 0,
  //             country: '',
  //           },
  //         }
  //       }
  //     },
  //     ivaCondition: {
  //       idIvaCondition: 0,
  //       ivaCondition: '',
  //     },
  //     responsiblePerson: {
  //       idResponsiblePerson: 0,
  //       firstName: '',
  //       lastName: '',
  //       phone: '',
  //       email: '',
  //       role: '',
  //     },
  //     createdAt: undefined,
  //     updatedAt: undefined,
  //     deletedAt: undefined,
  //       },
  //     description: '',
  //     price: 0,
  //     img: '',
  //     createdAt: undefined,
  //     updatedAt: undefined,
  //     deletedAt: undefined,
  //   }
  //   purchaseOrder: PurchaseOrdersModel,
  //   createdAt: undefined,
  //   updatedAt: undefined,
  // }



  getPurchaseOrderById(idPurchaseOrder: number){
    console.log(idPurchaseOrder);
    this.purchaseOrdersService.getPurchaseOrderById(idPurchaseOrder).subscribe((data)=>{
      this.purchase = data;
      this.purchaseOrdersService.getOrderDetails().subscribe((data)=>{
        
        this.addedProducts = data.filter(detalle => detalle.purchaseOrder.idPurchaseOrder == this.purchase?.idPurchaseOrder)
      });
    });
  }
}

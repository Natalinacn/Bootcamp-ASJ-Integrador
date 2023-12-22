import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PurchaseOrdersModel } from 'src/app/model/purchaseOrderModel';
import { PurchaseOrdersService } from 'src/app/services/purchase-orders.service';

@Component({
  selector: 'app-purchase-add-form',
  templateUrl: './purchase-add-form.component.html',
  styleUrls: ['./purchase-add-form.component.css']
})
export class PurchaseAddFormComponent {

  constructor(private purchaseOrdersService: PurchaseOrdersService){}

  purchaseOrder: PurchaseOrdersModel = {
  id: 0,
  OrderNumber: '',
  issueDate: new Date(), 
  deliveryDate: new Date(), 
  receptionInfo: '',
  description: '',
  provider: '',
  products: '',
  quantity: 0,
  totalAmount: 0
}

savePurchase(form:NgForm){
  console.log(this.purchaseOrder);
    //Crear el metodo de guardar en el servicio
  //Llamar al servicio de proveerdr para guardar
  //Redigir a la ruta
}
}



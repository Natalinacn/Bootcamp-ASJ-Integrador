import { PurchaseOrdersModel } from "./purchaseOrderModel";
import { ProductsModel } from "./productModel";

export interface OrderDetailModel{
    idOrderDetail:number,
    quantity: number,
    price: number,
	product?: ProductsModel,
    purchaseOrder: PurchaseOrdersModel,
    createdAt?: Date;
    updatedAt?: Date;
}




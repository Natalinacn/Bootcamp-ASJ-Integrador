import { ProductsModel } from "./productModel";
import { ProvidersModel } from "./providerModel";

export interface ProductOrderModel {
    product: string;
    quantity: number;
    price: number;
  }

export interface PurchaseOrdersModel {
    
    idPurchaseOrder: number,
    orderNumber: string,
    issueDate: Date,
    deliveryDate: Date,
    receptionInfo: string,
    description: string,
    status: boolean,
    totalAmount: number,
    provider: ProvidersModel,
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}


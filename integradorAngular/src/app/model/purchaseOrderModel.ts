import { ProductsModel } from "./productModel";

export interface ProductOrderModel {
    product: string;
    quantity: number;
    price: number;
  }

export interface PurchaseOrdersModel {
    
    id: string,
    OrderNumber: string,
    issueDate: Date,
    deliveryDate: Date,
    receptionInfo: string,
    description: string,
    provider: string,
    products: ProductOrderModel[]; //Este lo recorro
    status: boolean,
    totalAmount: number
}


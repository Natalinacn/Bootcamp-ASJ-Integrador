
export interface PurchaseOrdersModel {
    
    id: string,
    OrderNumber: string,
    issueDate: Date,
    deliveryDate: Date,
    receptionInfo: string,
    description: string,
    provider: string,
    products: string,
    quantity: number,
    totalAmount: number
}


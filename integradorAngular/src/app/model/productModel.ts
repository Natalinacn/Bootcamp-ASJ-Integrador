import { ProvidersModel } from "./providerModel";

export interface ProductsModel {
    
    idProduct: number,
    code: string,
    productName: string,
    category: Category,
    provider: ProvidersModel,
    description: string,
    price: number
    img: string
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;


}
export interface Category{
    categoryId:number,
	category: string;
}

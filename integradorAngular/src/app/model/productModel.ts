export interface ProductsModel {
    
    idProduct: number,
    code: string,
    productName: string,
    category: Category,
    provider: string,
    description: string,
    price: number
    img: string
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;


}
export interface Category{
    categoryId:number,
	category: string;
}

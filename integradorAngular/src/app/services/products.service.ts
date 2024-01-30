import { HttpClient } from '@angular/common/http'; //Importo el modulo http
import { Injectable } from '@angular/core';
import { Category, ProductsModel } from '../model/productModel';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  //Agrego la url de mi endpoint
  private baseUrl = 'http://localhost:8080/productos';

  constructor(
    //Traigo el parámetro http para realizar las peticiones
    private clienteHttp: HttpClient
  ) {}

  //  NUEVOS METODOS
  getProducts(): Observable<ProductsModel[]> {
    const url = this.baseUrl + '/listado';
    return this.clienteHttp.get<ProductsModel[]>(url);
  }

  createProduct(product: ProductsModel): Observable<ProductsModel> {
    const url = this.baseUrl + '/formulario';
    return this.clienteHttp.post<ProductsModel>(url, product).pipe(
      catchError((error) => {
        return throwError(error); // Propaga el error recibido del servidor
      })
    );
  }

  deleteProduct(idProduct: number): Observable<any> {
    const url = `${this.baseUrl}/${idProduct}`;
    return this.clienteHttp.delete<any>(url).pipe(
      catchError((error) => {
        const errorMessage = 'Error al eliminar el producto';
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  updateProduct(
    idProduct: number,
    product: ProductsModel
  ): Observable<ProductsModel> {
    const url = `${this.baseUrl}/actualizar/${idProduct}`;
    return this.clienteHttp.put<ProductsModel>(url, product).pipe(
      catchError((error) => {
        const errorMessage = 'Error al actualizar el producto';
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  getCategories(): Observable<Category[]> {
    const url = 'http://localhost:8080/categorias/listado';
    return this.clienteHttp.get<Category[]>(url);
  }

  getProductById(idProduct: number): Observable<ProductsModel> {
    const url = `${this.baseUrl}/${idProduct}`;
    return this.clienteHttp.get<ProductsModel>(url);
  }
}

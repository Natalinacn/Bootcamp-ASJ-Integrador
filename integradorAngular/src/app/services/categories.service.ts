import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Category } from '../model/productModel';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private baseUrl = 'http://localhost:8080/categorias';

  constructor(private clienteHttp: HttpClient) {}

  getCategories(): Observable<Category[]> {
    const url = this.baseUrl + '/listado';
    return this.clienteHttp.get<Category[]>(url);    
  }

    
  createCategory(category: Category): Observable<Category> {
    const url = this.baseUrl + '/crear';
    return this.clienteHttp.post<Category>(url, category).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }


getCategoryById(categoryId: number): Observable<Category> {
    const url = `${this.baseUrl}/${categoryId}`;
    return this.clienteHttp.get<Category>(url);
  }

  updateCategory(
    categoryId: number,
    category: Category
  ): Observable<Category> {
    const url = `${this.baseUrl}/actualizar/${categoryId}`;
    return this.clienteHttp.put<Category>(url, category).pipe(
      catchError((error) => {
        const errorMessage = 'Error al actualizar la categoría';
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  deleteCategory(categoryId: number): Observable<Category>{
    const url = `${this.baseUrl}/${categoryId}`;
    return this.clienteHttp.delete<Category>(url).pipe(
        catchError((error) => {
          const errorMessage = 'Error al eliminar la categoría';
          return throwError(() => new Error(errorMessage));
        })
      );
  }
}

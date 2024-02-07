import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Industry } from '../model/industryModel';

@Injectable({
  providedIn: 'root',
})
export class IndustriesService {
  private baseUrl = 'http://localhost:8080/industrias';

  constructor(private clienteHttp: HttpClient) {}

  getIndustries(): Observable<Industry[]> {
    const url = this.baseUrl + '/listadoActivas';
    return this.clienteHttp.get<Industry[]>(url);    
  }

    
  createIndustry(industry: Industry): Observable<Industry> {
    const url = this.baseUrl + '/crear';
    return this.clienteHttp.post<Industry>(url, industry).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }


getIndustryById(idIndustry: number): Observable<Industry> {
    const url = `${this.baseUrl}/${idIndustry}`;
    return this.clienteHttp.get<Industry>(url);
  }

  updateIndustry(
    idIndustry: number,
    industry: Industry
  ): Observable<Industry> {
    const url = `${this.baseUrl}/actualizar/${idIndustry}`;
    return this.clienteHttp.put<Industry>(url, industry).pipe(
      catchError((error) => {
        const errorMessage = 'Error al actualizar el rubro';
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  deleteIndustry(idIndustry: number): Observable<Industry>{
    const url = `${this.baseUrl}/${idIndustry}`;
    return this.clienteHttp.delete<Industry>(url).pipe(
        catchError((error) => {
          const errorMessage = 'Error al eliminar el rubro';
          return throwError(() => new Error(errorMessage));
        })
      );
  }
}

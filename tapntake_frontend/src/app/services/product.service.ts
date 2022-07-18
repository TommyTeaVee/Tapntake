import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product';

const baseUrl = 'http://localhost:8000/api/menu'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http: HttpClient ) { }

  getAllProducts(id: string | null): Observable<Product[]>{
    return this.http.get<Product[]>(`${baseUrl}/${id}/all`)
  }

  get(id: any): Observable<Product> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: Product, id: any): Observable<Product> {
    return this.http.post(`${baseUrl}/${id}`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(name: any): Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}/all/?name=${name}`);
  }
}
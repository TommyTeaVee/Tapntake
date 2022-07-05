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
}
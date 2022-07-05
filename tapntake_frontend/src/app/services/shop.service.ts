import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shop } from '../shop';

const baseUrl = 'http://localhost:8000/api/shops'

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor( private http: HttpClient ) { }

  getAll(): Observable<Shop[]> {
    return this.http.get<Shop[]>(`${baseUrl}`)
  }
}

import { Order } from './../model/order';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = "http://localhost:8080/api";

  constructor( private http: HttpClient) { }


  getOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(`${this.baseUrl}/allOrders`).pipe(
      map(response => response)
    )
  }

  getOrdersByCategoryId(id: string): Observable<Order[]>{
    return this.http.get<Order[]>(`${this.baseUrl}/category?id=${id}`).pipe(
      map(response => response)
    )
  }


  getOrdersByKeyword(keyword: string): Observable<Order[]>{
    return this.http.get<Order[]>(`${this.baseUrl}/orderkey?keyword=${keyword}`).pipe(
      map(response => response)
    )
  }


  getOrderById(id: string):Observable<Order>{
     return this.http.get<Order>(`${this.baseUrl}/order?id=${id}`).pipe(
       map(response => response)
     );
  }


}

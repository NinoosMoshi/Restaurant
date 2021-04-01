import { Order } from './../../model/order';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  orders: Order[] = [];

  constructor(private orderService:OrderService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activeRoute.paramMap.subscribe( () =>{
      this.finishOrders();
    })

  }


  finishOrders(){
    let result = this.activeRoute.snapshot.paramMap.has('id');

    if(result){
      this.getOrdersByCategoryId();
    }else{
      this.getOrders();
    }
  }


  getOrders(){
    this.orderService.getOrders().subscribe(data =>{
      this.orders = data;
    });
  }


  getOrdersByCategoryId(){
    let idCategory = this.activeRoute.snapshot.paramMap.get('id');
    this.orderService.getOrdersByCategoryId(idCategory).subscribe( data =>{
      this.orders = data
    })
  }




}

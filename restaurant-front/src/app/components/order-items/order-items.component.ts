import { Order } from './../../model/order';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  orders: Order[] = [];

  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.getOrders();
  }


  getOrders(){
    this.orderService.getOrders().subscribe(data =>{
      this.orders = data;
    });
  }




}

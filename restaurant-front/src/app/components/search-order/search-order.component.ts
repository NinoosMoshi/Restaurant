import { OrderService } from './../../service/order.service';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';

@Component({
  selector: 'app-search-order',
  templateUrl: './search-order.component.html',
  styleUrls: ['./search-order.component.css']
})
export class SearchOrderComponent implements OnInit {

  orders: Order[] = [];

  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
  }

  doSearch(value: string){
    this.orderService.getOrdersByKeyword(value).subscribe(
      data =>{
        this.orders = data;
      }
    )
  }

}

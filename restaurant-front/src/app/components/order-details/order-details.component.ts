import { Order } from './../../model/order';
import { OrderService } from 'src/app/service/order.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  order: Order=null;

  constructor(private orderService: OrderService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder(){
    let id = this.activeRoute.snapshot.paramMap.get('id');
    this.orderService.getOrderById(id).subscribe(
      data =>{
        this.order = data
      }
    )
  }

  undo(){
    // this.router.navigateByUrl("[order]");  or
       this.router.navigateByUrl("/order");

  }

}

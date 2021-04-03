import { OrderService } from './../../service/order.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-order',
  templateUrl: './search-order.component.html',
  styleUrls: ['./search-order.component.css']
})
export class SearchOrderComponent implements OnInit {


  constructor(private orderService:OrderService, private router: Router) { }

  ngOnInit(): void {
  }

  doSearch(value: string){
     this.router.navigateByUrl("/order/" + value)
  }

}

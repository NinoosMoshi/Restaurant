import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderService } from './service/order.service';
import { OrderItemsComponent } from './components/order-items/order-items.component';
import { CategoryItemsComponent } from './components/category-items/category-items.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderItemsComponent,
    CategoryItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

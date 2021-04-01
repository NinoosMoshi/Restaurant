import { OrderItemsComponent } from './components/order-items/order-items.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'category/:id', component: OrderItemsComponent},
  {path:'category', component: OrderItemsComponent},
  {path:'order', component: OrderItemsComponent},
  {path:'',redirectTo:'/order',pathMatch:'full'},
  {path:'**',redirectTo:'/order',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

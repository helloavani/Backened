import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersComponent } from './orders.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';

const routes: Routes = [{
  path: '',
  component: OrdersComponent,
  children: [{
    path: 'add-order',
    component: AddOrderComponent,
  }, {
    path: 'view-orders',
    component: ViewOrdersComponent,
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class OrdersRoutingModule {

}

export const routedComponents = [
  OrdersComponent,
  AddOrderComponent,
  ViewOrdersComponent,
];

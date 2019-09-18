import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [{
  path: '',
  component: ProductsComponent,
  children: [{
    path: 'add-product',
    component: AddProductComponent,
  }, {
    path: 'view-products',
    component: ViewProductsComponent,
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
export class ProductsRoutingModule {

}

export const routedComponents = [
  ProductsComponent,
  AddProductComponent,
  ViewProductsComponent,
];

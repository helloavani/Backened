import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import { NewhomeComponent } from './newhome/newhome.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
  {
    path: 'newhome',
    component: NewhomeComponent,
  },
   {
    path: 'users',
    loadChildren: './users/users.module#UsersModule',
  },
  {
    path: 'categories',
    loadChildren: './categories/categories.module#CategoriesModule',
  },
  {
    path: 'products',
    loadChildren: './products/products.module#ProductsModule',
  },
  {
    path: 'brands',
    loadChildren: './brands/brands.module#BrandsModule',
  },
  {
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule',
  },
  {
    path: '',
    redirectTo: 'newhome',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

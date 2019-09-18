import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandsComponent } from './brands.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { ViewBrandsComponent } from './view-brands/view-brands.component';

const routes: Routes = [{
  path: '',
  component: BrandsComponent,
  children: [{
    path: 'add-brand',
    component: AddBrandComponent,
  }, {
    path: 'view-brands',
    component: ViewBrandsComponent,
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
export class BrandsRoutingModule {

}

export const routedComponents = [
  BrandsComponent,
  AddBrandComponent,
  ViewBrandsComponent,
];

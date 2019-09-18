import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from './categories.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ViewCategoriesComponent } from './view-categories/view-categories.component';

const routes: Routes = [{
  path: '',
  component: CategoriesComponent,
  children: [{
    path: 'add-category',
    component: AddCategoryComponent,
  }, {
    path: 'view-categories',
    component: ViewCategoriesComponent,
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
export class CategoriesRoutingModule {

}

export const routedComponents = [
  CategoriesComponent,
  AddCategoryComponent,
  ViewCategoriesComponent,
];

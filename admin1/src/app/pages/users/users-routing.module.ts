import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ViewVendorsComponent } from './view-vendors/view-vendors.component';
const routes: Routes = [{
  path: '',
  component: UsersComponent,
  children: [{
    path: 'add-user',
    component: AddUserComponent,
  }, {
    path: 'view-users',
    component: ViewUsersComponent,
  },
  {
    path: 'view-vendors',
    component: ViewVendorsComponent,
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
export class UsersRoutingModule {

}

export const routedComponents = [
  UsersComponent,
  AddUserComponent,
  ViewUsersComponent,
  ViewVendorsComponent,
];

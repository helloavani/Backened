import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicesComponent } from './devices.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { ViewDevicesComponent } from './view-devices/view-devices.component';

const routes: Routes = [{
  path: '',
  component: DevicesComponent,
  children: [{
    path: 'add-device',
    component: AddDeviceComponent,
  }, {
    path: 'view-devices',
    component: ViewDevicesComponent,
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
export class DevicesRoutingModule {

}

export const routedComponents = [
  DevicesComponent,
  AddDeviceComponent,
  ViewDevicesComponent,
];

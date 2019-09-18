import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { BrandsRoutingModule, routedComponents } from './brands-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import {ApicallProvider} from '../../providers/apicall/apicall';
import { StatusViewComponent } from './status.render.component';
@NgModule({
  imports: [
    ThemeModule,
    BrandsRoutingModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ...routedComponents,
    StatusViewComponent
  ],
  providers: [
    SmartTableService,
    ApicallProvider
  ],
  entryComponents: [StatusViewComponent],
})
export class BrandsModule { }

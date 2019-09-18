import { NgModule } from '@angular/core';
import { SmartTableService } from '../../@core/data/smart-table.service';
import {ApicallProvider} from '../../providers/apicall/apicall';
import { ThemeModule } from '../../@theme/theme.module';
import { UsersRoutingModule, routedComponents } from './users-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {StatusViewComponent} from './status.render.component';
@NgModule({
  imports: [
    ThemeModule,
    UsersRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    StatusViewComponent,
  ],
  providers: [
    SmartTableService,
    ApicallProvider
  ],
  entryComponents : [StatusViewComponent],
})
export class UsersModule { }

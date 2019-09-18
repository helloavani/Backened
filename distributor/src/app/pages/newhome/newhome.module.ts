import { NgModule} from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { NewhomeComponent } from './newhome.component';
import { GmapsComponent } from './gmaps/gmaps.component';

import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { AngularEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { EchartsLineComponent } from './echarts/echarts-line.component';
import { EchartsPieComponent } from './echarts/echarts-pie.component';
import { EchartsBarComponent } from './echarts/echarts-bar.component';
import { EchartsMultipleXaxisComponent } from './echarts/echarts-multiple-xaxis.component';
import { EchartsAreaStackComponent } from './echarts/echarts-area-stack.component';
import { EchartsBarAnimationComponent } from './echarts/echarts-bar-animation.component';
import { EchartsRadarComponent } from './echarts/echarts-radar.component';
import { EchartsComponent } from './echarts/echarts.component';
@NgModule({
  imports: [
    ThemeModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAQiy1di-TBV5zwXVYv_XJdj9M50RVb9Ns'}),
    AgmSnazzyInfoWindowModule,
    AngularEchartsModule, NgxChartsModule,
  ],
  declarations: [
    NewhomeComponent,
    GmapsComponent,
    EchartsLineComponent,
  EchartsPieComponent,
  EchartsBarComponent,
  EchartsMultipleXaxisComponent,
  EchartsAreaStackComponent,
  EchartsBarAnimationComponent,
  EchartsRadarComponent,
  EchartsComponent,


    
  ],
})
export class NewhomeModule { }

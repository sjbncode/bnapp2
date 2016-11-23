import { NgModule }           from '@angular/core';

import { SharedModule }        from '../shared/shared.module';
import { ClimsService }     from './shared/clims.service';
import { MonitorComponent }   from './monitor/monitor.component';
import { CLIMSRoutingModule } from './clims-routing.module';
import { MonthlyComponent }    from './reports/monthly.component';


@NgModule({

  imports:      [ SharedModule,CLIMSRoutingModule],
  declarations: [ MonitorComponent,MonthlyComponent],
  exports:      [ MonitorComponent ],
  providers:    [ ClimsService ]
})
export class ClimsModule { }
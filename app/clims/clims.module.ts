import { NgModule }           from '@angular/core';

import { SharedModule }        from '../shared/shared.module';
import { ClimsService }     from './shared/clims.service';
import { MonitorComponent }   from './monitor/monitor.component';
import { CLIMSRoutingModule } from './clims-routing.module';


@NgModule({

  imports:      [ SharedModule,CLIMSRoutingModule],
  declarations: [ MonitorComponent],
  exports:      [ MonitorComponent ],
  providers:    [ ClimsService ]
})
export class ClimsModule { }
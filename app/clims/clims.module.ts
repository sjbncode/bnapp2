import { NgModule }           from '@angular/core';

import { SharedModule }        from '../shared/shared.module';
import { ClimsService }     from './shared/clims.service';
import { MonitorComponent }   from './monitor/monitor.component';
import { CLIMSRoutingModule } from './clims-routing.module';
import {MaterialModule} from '@angular/material';

@NgModule({

  imports:      [ SharedModule,CLIMSRoutingModule,MaterialModule.forRoot()],
  declarations: [ MonitorComponent],
  exports:      [ MonitorComponent ],
  providers:    [ ClimsService ]
})
export class ClimsModule { }
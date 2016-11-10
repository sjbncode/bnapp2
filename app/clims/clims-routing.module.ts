import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { MonitorComponent }    from './monitor/monitor.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', redirectTo: 'monitor', pathMatch: 'full'},
     { path: 'monitor', component: MonitorComponent }
  ])],
  exports: [RouterModule]
})
export class CLIMSRoutingModule {}
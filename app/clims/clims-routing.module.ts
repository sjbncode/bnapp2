import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { MonitorComponent }    from './monitor/monitor.component';
import { MonthlyComponent }    from './reports/monthly.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', redirectTo: 'monitor', pathMatch: 'full'},
     { path: 'monitor', component: MonitorComponent },
     { path: 'reports/monthly', component: MonthlyComponent }
  ])],
  exports: [RouterModule]
})
export class CLIMSRoutingModule {}
import { NgModule }      from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import { HeroListComponent } from './components/hero-list.c';
import { HeroDetailComponent } from './components/hero-detail.c';
import { DashboardComponent } from './components/dashboard.c';



const routes:Routes=[{
    path:'heroes',
    component:HeroListComponent
  },{
    path:'hashboard',
    component:DashboardComponent
  },{
    path:'herodetail/:id',
    component:HeroDetailComponent
  }
  ];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

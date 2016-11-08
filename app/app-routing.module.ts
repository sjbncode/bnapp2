import { NgModule }      from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

// import { HeroListComponent } from './components/hero-list.c';
// import { HeroDetailComponent } from './components/hero-detail.c';
// import { DashboardComponent } from './components/dashboard.c';

import { ContactComponent } from './contact/contact.module';

const routes:Routes=[
{ path: '', redirectTo: 'contact', pathMatch: 'full'}
 // , { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
 //  { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
  ];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

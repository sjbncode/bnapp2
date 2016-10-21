import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeroListComponent } from './components/hero-list.c';
import { HeroDetailComponent } from './components/hero-detail.c';
import { DashboardComponent } from './components/dashboard.c';

import {HeroService} from './services/hero.s';


@NgModule({
  imports:      [ BrowserModule ,FormsModule
  ,RouterModule.forRoot([{
  	path:'heroes',
  	component:HeroListComponent
  },{
  	path:'hashboard',
  	component:DashboardComponent
  },{
  	path:'herodetail/:id',
  	component:HeroDetailComponent
  }

  ])],
  declarations: [ AppComponent ,HeroListComponent,HeroDetailComponent, DashboardComponent],//注册指令  
  providers:[HeroService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

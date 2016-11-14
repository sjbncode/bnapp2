import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
//import {RouterModule} from '@angular/router';
import { HttpModule }    from '@angular/http';

import {AppRoutingModule} from './app-routing.module';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { ContactModule } from './contact/contact.module';
// import {MaterialModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports:[BrowserModule //,FormsModule
  ,HttpModule
  ,AppRoutingModule//定义路由模块
  ,ContactModule
  ,CoreModule.forRoot({userName: 'Miss Marple'})
  // ,MaterialModule.forRoot()
  ,NgbModule.forRoot()
    ],
  declarations: [ AppComponent ],//注册指令  
  bootstrap:    [ AppComponent ]
})
export class AppModule { }



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


@NgModule({
  imports:[BrowserModule //,FormsModule
  ,HttpModule
  ,AppRoutingModule//定义路由模块
  ,ContactModule
  ,CoreModule.forRoot({userName: 'Miss Marple'}),
    ],
  declarations: [ AppComponent ],//注册指令  
  bootstrap:    [ AppComponent ]
})
export class AppModule { }



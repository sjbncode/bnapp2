import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import {AppRoutingModule} from './app-routing.module';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { ContactModule } from './contact/contact.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports:[BrowserModule //,FormsModule
  ,HttpModule
  ,AppRoutingModule//定义路由模块
  ,ContactModule
  ,CoreModule.forRoot({userName: 'Miss Marple'})
  ,NgbModule.forRoot()
    ],
  declarations: [ AppComponent ],//注册指令  
  bootstrap:    [ AppComponent ]
})
export class AppModule { }



import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroListComponent } from './components/hero-list.c';
import { HeroDetailComponent } from './components/hero-detail.c';


@NgModule({
  imports:      [ BrowserModule ,FormsModule],
  declarations: [ AppComponent ,HeroListComponent,HeroDetailComponent],//注册指令
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

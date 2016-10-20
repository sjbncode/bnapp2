import { Component } from '@angular/core';
import {Hero} from './models/hero';
//import {HeroService} from './services/hero.s';

@Component({
  selector: 'my-app',
  //providers:[HeroService],
  template: `<h1>{{title}}</h1>
  <nav>
  <a routerLink='/hashboard'>Dashboard</a>
  <a routerLink='/heroes'>Heroes</a>
  </nav>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit{ 
	ngOnInit(){
		console.log('AppComponent OnInit')
	}
}

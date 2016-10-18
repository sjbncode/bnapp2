import { Component } from '@angular/core';
import {Hero} from './models/hero';
import {HeroService} from './services/hero.s';

@Component({
  selector: 'my-app',
  providers:[HeroService],
  template: `<h1>{{title}}</h1>
  `
})
export class AppComponent implements OnInit{ 
	
}

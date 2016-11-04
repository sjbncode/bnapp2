import { Component } from '@angular/core';
import {Hero} from './models/hero';
//import {HeroService} from './services/hero.s';

@Component({
  moduleId:module.id,
  selector: 'my-app',
  //providers:[HeroService],
  templateUrl:'app.component.html',
  styleUrls:['../node_modules/metismenu/dist/metisMenu.min.css'],

})
export class AppComponent implements OnInit{ 
	ngOnInit(){
		console.log('AppComponent OnInit');
    //$('#menu').metisMenu();
	}
}

import { Component,ViewEncapsulation,OnInit } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'my-app',
  //providers:[HeroService],
  templateUrl:'app.component.html',
  styleUrls:['app.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class AppComponent implements OnInit{ 
	navItems = [
    {name: 'clims', route: 'clims'},
    {name: 'contact', route: 'contact'}
  ];
  appName='Bn Demo';
	ngOnInit(){
		console.log('AppComponent OnInit');
	}
}

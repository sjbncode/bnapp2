import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import{Hero} from '../models/hero';
import{HeroService} from '../services/hero.s';

@Component({
	moduleId:module.id,
	selector:"bn-dashboard",
	templateUrl:'dashboard.html'
})

export class DashboardComponent implements OnInit {
	title='Tour of Heroes';
	heroes:Hero[]=[];
	constructor(private heroService:HeroService,
		private router:Router){}

	ngOnInit():void{
		this.heroService.getHeros()
		.then(s=>this.heroes=s.slice(1,5));
	}

	gotoDetail(h:Hero):void{
		let link=['/herodetail',h.id]
		this.router.navigate(link);
	}
}


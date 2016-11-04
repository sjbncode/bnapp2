import { Component ,OnInit} from '@angular/core';
import {Hero} from '../models/hero';
import {HeroService} from '../services/hero.s';

@Component({
  moduleId:module.id,
  selector: 'bn-hero-list',
  templateUrl:"hero-list.html",
  styleUrls:['hero-list.css']
})
export class HeroListComponent implements OnInit{ 
	constructor(private heroService: HeroService) { }
	ngOnInit(){
		this.heroService.getHerosSlowly().then(heros=>this.heros=heros);
	};

	title='Tour of Heroes';
	selectedHero:Hero;
	heros:Hero[];
	onSelect(h):void{
		this.selectedHero=h;
	}
}

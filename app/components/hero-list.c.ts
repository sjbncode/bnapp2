import { Component ,OnInit} from '@angular/core';
import {Hero} from '../models/hero';
import {HeroService} from '../services/hero.s';

@Component({
  selector: 'bn-hero-list',
  template: `<h1>{{title}}</h1>
  <div *ngIf="selectedHero">
  	<bn-hero-detail [hero]="selectedHero"></bn-hero-detail >
  </div>
  <h2>My heroes</h2>
  <ul class="heroes">
	  <li *ngFor="let h of heros" (click)="onSelect(h)" [class.selected]="h===selectedHero">
	  	<span class="badge">{{h.name}}</span>
	  </li>
  </ul>
  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
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

import {Injectable} from '@angular/core';//可注入

import {Hero} from '../models/hero';

@Injectable() //可注入
export class HeroService{
	getHeros():Promise<Hero[]>{
		let	heros:Hero[] = [
					  {id: 11, name: 'Mr. Nice'},
					  {id: 12, name: 'Narco'},
					  {id: 13, name: 'Bombasto'},
					  {id: 14, name: 'Celeritas'},
					  {id: 15, name: 'Magneta'},
					  {id: 16, name: 'RubberMan'},
					  {id: 17, name: 'Dynama'},
					  {id: 18, name: 'Dr IQ'},
					  {id: 19, name: 'Magma'},
					  {id: 20, name: 'Tornado'}
					];

		return Promise.resolve(heros); //promise
	}

	getHerosSlowly():Promise<Hero[]>{
		let	heros:Hero[] = [
					  {id: 11, name: 'Mr. Nice'},
					  {id: 12, name: 'Narco'},
					  {id: 13, name: 'Bombasto'},
					  {id: 14, name: 'Celeritas'},
					  {id: 15, name: 'Magneta'},
					  {id: 16, name: 'RubberMan'},
					  {id: 17, name: 'Dynama'},
					  {id: 18, name: 'Dr IQ'},
					  {id: 19, name: 'Magma'},
					  {id: 20, name: 'Tornado'}
					];
		return new Promise<Hero[]>(r=>{setTimeout(r,2000)}).then(()=>this.getHeros())
	}
}
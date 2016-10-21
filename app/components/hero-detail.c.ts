import { Component,Input,OnInit} from '@angular/core';//Input 组件
import {ActivatedRoute,Params} from '@angular/router';
import {Location} from '@angular/common';

import {Hero} from '../models/hero';
import {HeroService} from '../services/hero.s';

@Component({
	moduleId:module.id,
	selector:"bn-hero-detail",//标签名称
	templateUrl:'hero-detail.html'
})

export class HeroDetailComponent implements OnInit{
	@Input() //输入属性， 参数传递 方法1
	hero:Hero;

	constructor(private heroService:HeroService,
		private route:ActivatedRoute,
		private location:Location
		){}

	ngOnInit():void{
		//参数传递 方法2
		this.route.params.forEach((params:Params)=>{
			let id=+params['id'];
			this.heroService.getHero(id).then(x=>this.hero=x);
		});
	}

	goBack():void{
		this.location.back();
	}


}
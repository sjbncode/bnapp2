import { Component,Input} from '@angular/core';//Input 组件

import {Hero} from '../models/hero';

@Component({
	selector:"bn-hero-detail",//标签名称
	template: `
  <h2>{{hero.name}} details</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div><label>name(单向绑定): </label><input value="{{hero.name}}" placehold="name"></div>
  <div><label>name(双向绑定): </label><input [(ngModel)]="hero.name" placehold="name"></div>
`
})

export class HeroDetailComponent{
	@Input() //输入属性
	hero:Hero;
}
import { Component, OnInit,OnDestroy ,Input}      from '@angular/core';

@Component({
	moduleId:module.id,
	selector:'side-nav',
	templateUrl:'side-nav.component.html',
	styleUrls:['side-nav.component.css']
})
export class SideNavComponent implements OnInit {
	
	// constructor(argument) {
	// 	// code...
	// }
	@Input()
	navItems:any;
	sideNavItems:any;
	ngOnInit(){
		this.sideNavItems=[];
		this.loadSideNav();
	}

	loadSideNav(){		
		this.sideNavItems=[
		{ groupName:'',name:'文档首页', link:'',isParent:false,subItems:[]}
		,{ groupName:'核心文档',name:'快速起步', link:'',isParent:false,subItems:[]}
		,{ groupName:'',name:'开发指南', link:'',isParent:true,subItems:[{name:'1.概览',link:''},{name:'2.架构',link:''},{name:'3.显示数据',link:''}]}
		,{ groupName:'',name:'API参考手册', link:'',isParent:false,subItems:[]}
		,{ groupName:'附加文档',name:'教程', link:'',isParent:true,subItems:[{name:'1.概览',link:''},{name:'2.架构',link:''},{name:'3.显示数据',link:''}]}
		];
	}
}
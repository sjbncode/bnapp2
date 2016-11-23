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
		{ groupName:'',name:'首页', link:'',isParent:false,subItems:[]}
		,{ groupName:'CLIMS',name:'同步状态', link:'/clims',isParent:false,subItems:[]}
		,{ groupName:'',name:'开发指南', link:'',isParent:true,subItems:[{name:'1.概览',link:''},{name:'2.架构',link:''},{name:'3.显示数据',link:''}]}
		,{ groupName:'',name:'API参考手册', link:'',isParent:false,subItems:[]}
		,{ groupName:'测试',name:'教程', link:'',isParent:true,subItems:[{name:'1.概览',link:''},{name:'2.架构',link:''},{name:'3.显示数据',link:''}]}
		,{ groupName:'',name:'高级文档', link:'',isParent:true,subItems:[{name:'1.概览',link:''},{name:'2.架构',link:''},{name:'3.显示数据',link:''}]}
		];
	}
}
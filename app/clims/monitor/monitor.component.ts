import { Component, OnInit,OnDestroy }      from '@angular/core';
import {  ClimsService } from '../shared/clims.service';
import { UserService }             from '../../core/user.service';

@Component({
	moduleId:module.id,
	selector:'clims-monitor',
	templateUrl:'monitor.component.html',
	styleUrls:['monitor.component.css'],
	providers:[ClimsService]
})
export class MonitorComponent implements OnInit,OnDestroy{

	constructor(userService:UserService,private climsService:ClimsService ){

	}
	ngOnInit(){
		console.log('---ngOnInit---');
		this.start();
		
	}
	ngOnDestroy(){
		console.log('---ngOnDestroy---');
		this.stop();
	}
	test='xxx';
	lineData = {
				labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
				series: [
					[12, 9, 7, 8, 5],
					[2, 1, 3.5, 7, 3],
					[1, 3, 4, 5, 6]
				]
			};
	lineOptions = {
		fullWidth: true,
		chartPadding: {
			right: 40
		}
	};

	synclog = [];
	synclog_exception = 0;
	syncErrors = [];
	lastRereshTime='';
	duplicateInvoice=[];
	promise:any;
	errorMessage:any;
	start(){
		this.promise=setInterval(()=>{
			this.getSyncLog();
		},5000);
		
		this.getSyncLog();
	};
	getSyncLog(){
		this.climsService.getSyncLog().subscribe(
                     logs => {this.synclog=logs;},
                     error =>  this.errorMessage = <any>error);
	}
	stop(){
		if(this.promise)
			clearInterval(this.promise);
	};
	showErrors(dateName:string){
		alert(dateName);
	}
}

Date.prototype.format = function(format){ 
				var o = { 
				"M+" : this.getMonth()+1, //month 
				"d+" : this.getDate(), //day 
				"h+" : this.getHours(), //hour 
				"m+" : this.getMinutes(), //minute 
				"s+" : this.getSeconds(), //second 
				"q+" : Math.floor((this.getMonth()+3)/3), //quarter 
				"S" : this.getMilliseconds() //millisecond 
				} 

				if(/(y+)/.test(format)) { 
				format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
				} 

				for(var k in o) { 
				if(new RegExp("("+ k +")").test(format)) { 
				format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length)); 
				} 
				} 
				return format; 
				} 
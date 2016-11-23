import {Component,OnInit,OnDestroy}from'@angular/core';
import {ClimsService} from '../shared/clims.service';

@Component({
	moduleId:module.id,
	selector:'clims-report-montly',
	templateUrl:'monthly.component.html',
	providers:[ClimsService]

})
export class MonthlyComponent implements OnInit {
	
	constructor(private climsService:ClimsService) {
	}
	ngOnInit(){

	}
	company:string;
	lineData = {
				labels: ["2015-12","2016-01","2016-02","2016-03","2016-04", "2016-05", "2016-06", "2016-07", "2016-08", "2016-09", "2016-10", "2016-11"],
				datasets: [ {
					label: "Example dataset",
					fillColor: "rgba(26,179,148,0.5)",
					strokeColor: "rgba(26,179,148,0.7)",
					pointColor: "rgba(26,179,148,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(26,179,148,1)",
					data: [0,0,0,0,0,0,0,0,0,0,0]
				}]
			};
	lineData2 = {
				labels: ["2015-12","2016-01","2016-02","2016-03","2016-04", "2016-05", "2016-06", "2016-07", "2016-08", "2016-09", "2016-10", "2016-11"],
				datasets: [ {
					label: "Example dataset",
					fillColor: "rgba(26,179,148,0.5)",
					strokeColor: "rgba(26,179,148,0.7)",
					pointColor: "rgba(26,179,148,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(26,179,148,1)",
					data: [0,0,0,0,0,0,0,0,0,0,0]
				}]
			};
	getCompanySummary(){
		this.climsService.getCompanySummary(this.company)
						.subscribe(d=>{
							this.lineData.datasets[0].data=this.buildLineData(d,'amount');
							this.lineData2.datasets[0].data=this.buildLineData(d,'orders');
						},e=>{
							console.log('Error(getCompanySummary):'+e);
						})
	}
	buildLineData(d,k) {
				var dataList=[];
				var self=this;
				for (var i = 0 ; i <self.lineData.labels.length; i++) {
					var v=0;
					var matchs=d.filter(function(x){return x.M==self.lineData.labels[i];});
					if(matchs.length>0){
						v=matchs[0][k];
					}
					dataList.push(v);
				}
				return dataList;
			}
}

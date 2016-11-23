export class SyncLog{constructor(public	datename:string,	status:string,	c:number){}}

export class SyncError{
	ID:string;
	DataName:string;
	Destination:string;
	Key1:string;
	key2:string;
	Key3:string;
	Result:string;
	EntityXml:string;
	PostEntityXml:string;
	SyncTimes:number;
	CreatedBy:string;
	CreatedDttm:Date;
	UpdatedDttm:Date;
}
export class MonthlyData{
	datetype:string;
	id:string;
	name:string;
	month:string;
	value:number;
}
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
@Injectable()
export class ClimsService {

	constructor(private http: Http){

	}
  getTest(){
  	return new Promise<string>(resolve=>{
  		resolve("return from service");
  	})
  }




	getCustomerMonthlySummary(){};
	getDuplicateInvoice(){};

	getSyncLog(): Observable<SyncLog[]> {

  return this.http.get('http://127.0.0.1:3009/api/synclog/')
                  .map(this.extractData)
                  .catch(this.handleError);
}

getCompanySummary(cname): Observable<any[]>{
				// cname=cname||'广西南宁宏唐生物科技有限公司'
				// $http.post('/api/CompanyMonthlySummary/', {CompanyName:cname})
				// .then(function(result){
				// 	if(result.data.error)
				// 	{
				// 		console.log(JSON.stringify(result));
				// 		return;
				// 	}

				// 	$scope.lineData.datasets[0].data=buildLineData(result.data.data,'amount');
				// 	$scope.lineData2.datasets[0].data=buildLineData(result.data.data,'orders');
				// })

				return this.http.post('http://127.0.0.1:3009/api/CompanyMonthlySummary/',{CompanyName:cname})
                  .map(this.extractData)
                  .catch(this.handleError);
			}

private extractData(res: Response) {
  let body = res.json();
  return body.data || { };
}
private handleError (error: Response | any) {
  // In a real world app, we might use a remote logging infrastructure
  let errMsg: string;
  if (error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}
}

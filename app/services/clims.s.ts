import {Injectable} from '@angular/core';//可注入
import {SyncLog,SyncError,MonthlyData} from '../models/clims';

@Injectable()
export class CLIMSService {
	
	// constructor(argument) {
	// 	// code...
	// }
	getSyncLog():Promise<SyncLog[]>{
		return null;
	}

	getMonthlyReport():Promise<MonthlyData[]>{
		return null
	}
}
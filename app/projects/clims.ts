export class SyncLog{
	datename:string;
	status:string;
	c:number
}

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
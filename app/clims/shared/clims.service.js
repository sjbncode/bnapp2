"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SyncLog = (function () {
    function SyncLog(datename, status, c) {
        this.datename = datename;
    }
    return SyncLog;
}());
exports.SyncLog = SyncLog;
var SyncError = (function () {
    function SyncError() {
    }
    return SyncError;
}());
exports.SyncError = SyncError;
var MonthlyData = (function () {
    function MonthlyData() {
    }
    return MonthlyData;
}());
exports.MonthlyData = MonthlyData;
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var ClimsService = (function () {
    function ClimsService(http) {
        this.http = http;
    }
    ClimsService.prototype.getTest = function () {
        return new Promise(function (resolve) {
            resolve("return from service");
        });
    };
    ClimsService.prototype.getCustomerMonthlySummary = function () { };
    ;
    ClimsService.prototype.getDuplicateInvoice = function () { };
    ;
    ClimsService.prototype.getSyncLog = function () {
        return this.http.get('http://127.0.0.1:3009/api/synclog/')
            .map(this.extractData)
            .catch(this.handleError);
    };
    ClimsService.prototype.getCompanySummary = function (cname) {
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
        return this.http.post('http://127.0.0.1:3009/api/CompanyMonthlySummary/', { CompanyName: cname })
            .map(this.extractData)
            .catch(this.handleError);
    };
    ClimsService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    ClimsService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    ClimsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ClimsService);
    return ClimsService;
}());
exports.ClimsService = ClimsService;
//# sourceMappingURL=clims.service.js.map
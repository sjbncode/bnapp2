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
var core_1 = require('@angular/core');
var clims_service_1 = require('../shared/clims.service');
var user_service_1 = require('../../core/user.service');
var MonitorComponent = (function () {
    function MonitorComponent(userService, climsService) {
        this.climsService = climsService;
        this.test = 'xxx';
        this.lineData = {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            series: [
                [12, 9, 7, 8, 5],
                [2, 1, 3.5, 7, 3],
                [1, 3, 4, 5, 6]
            ]
        };
        this.lineOptions = {
            fullWidth: true,
            chartPadding: {
                right: 40
            }
        };
        this.synclog = [];
        this.synclog_exception = 0;
        this.syncErrors = [];
        this.lastRereshTime = '';
        this.duplicateInvoice = [];
    }
    MonitorComponent.prototype.ngOnInit = function () {
        console.log('---ngOnInit---');
        this.start();
    };
    MonitorComponent.prototype.ngOnDestroy = function () {
        console.log('---ngOnDestroy---');
        this.stop();
    };
    MonitorComponent.prototype.start = function () {
        var _this = this;
        this.promise = setInterval(function () {
            _this.getSyncLog();
        }, 5000);
        this.getSyncLog();
    };
    ;
    MonitorComponent.prototype.getSyncLog = function () {
        var _this = this;
        this.climsService.getSyncLog().subscribe(function (logs) { _this.synclog = logs; }, function (error) { return _this.errorMessage = error; });
    };
    MonitorComponent.prototype.stop = function () {
        if (this.promise)
            clearInterval(this.promise);
    };
    ;
    MonitorComponent.prototype.showErrors = function (dateName) {
        alert(dateName);
    };
    MonitorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'clims-monitor',
            templateUrl: 'monitor.component.html',
            styleUrls: ['monitor.component.css'],
            providers: [clims_service_1.ClimsService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, clims_service_1.ClimsService])
    ], MonitorComponent);
    return MonitorComponent;
}());
exports.MonitorComponent = MonitorComponent;
Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds() //millisecond 
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
};
//# sourceMappingURL=monitor.component.js.map
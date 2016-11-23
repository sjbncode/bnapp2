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
var MonthlyComponent = (function () {
    function MonthlyComponent(climsService) {
        this.climsService = climsService;
        this.lineData = {
            labels: ["2015-12", "2016-01", "2016-02", "2016-03", "2016-04", "2016-05", "2016-06", "2016-07", "2016-08", "2016-09", "2016-10", "2016-11"],
            datasets: [{
                    label: "Example dataset",
                    fillColor: "rgba(26,179,148,0.5)",
                    strokeColor: "rgba(26,179,148,0.7)",
                    pointColor: "rgba(26,179,148,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(26,179,148,1)",
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }]
        };
        this.lineData2 = {
            labels: ["2015-12", "2016-01", "2016-02", "2016-03", "2016-04", "2016-05", "2016-06", "2016-07", "2016-08", "2016-09", "2016-10", "2016-11"],
            datasets: [{
                    label: "Example dataset",
                    fillColor: "rgba(26,179,148,0.5)",
                    strokeColor: "rgba(26,179,148,0.7)",
                    pointColor: "rgba(26,179,148,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(26,179,148,1)",
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }]
        };
    }
    MonthlyComponent.prototype.ngOnInit = function () {
    };
    MonthlyComponent.prototype.getCompanySummary = function () {
        var _this = this;
        this.climsService.getCompanySummary(this.company)
            .subscribe(function (d) {
            _this.lineData.datasets[0].data = _this.buildLineData(d, 'amount');
            _this.lineData2.datasets[0].data = _this.buildLineData(d, 'orders');
        }, function (e) {
            console.log('Error(getCompanySummary):' + e);
        });
    };
    MonthlyComponent.prototype.buildLineData = function (d, k) {
        var dataList = [];
        var self = this;
        for (var i = 0; i < self.lineData.labels.length; i++) {
            var v = 0;
            var matchs = d.filter(function (x) { return x.M == self.lineData.labels[i]; });
            if (matchs.length > 0) {
                v = matchs[0][k];
            }
            dataList.push(v);
        }
        return dataList;
    };
    MonthlyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'clims-report-montly',
            templateUrl: 'monthly.component.html',
            providers: [clims_service_1.ClimsService]
        }), 
        __metadata('design:paramtypes', [clims_service_1.ClimsService])
    ], MonthlyComponent);
    return MonthlyComponent;
}());
exports.MonthlyComponent = MonthlyComponent;
//# sourceMappingURL=monthly.component.js.map
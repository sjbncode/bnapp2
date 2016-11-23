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
var shared_module_1 = require('../shared/shared.module');
var clims_service_1 = require('./shared/clims.service');
var monitor_component_1 = require('./monitor/monitor.component');
var clims_routing_module_1 = require('./clims-routing.module');
var monthly_component_1 = require('./reports/monthly.component');
var ClimsModule = (function () {
    function ClimsModule() {
    }
    ClimsModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, clims_routing_module_1.CLIMSRoutingModule],
            declarations: [monitor_component_1.MonitorComponent, monthly_component_1.MonthlyComponent],
            exports: [monitor_component_1.MonitorComponent],
            providers: [clims_service_1.ClimsService]
        }), 
        __metadata('design:paramtypes', [])
    ], ClimsModule);
    return ClimsModule;
}());
exports.ClimsModule = ClimsModule;
//# sourceMappingURL=clims.module.js.map
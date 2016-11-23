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
var chartjs_1 = require('chartjs');
var BnChartDirective = (function () {
    function BnChartDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    BnChartDirective.prototype.ngOnChanges = function (changes) {
        if (changes["bnChart"] && changes["bnChart"].currentValue) {
            console.log(changes);
            this.drawChart();
        }
    };
    BnChartDirective.prototype.drawChart = function () {
        var chartCreated, chart;
        var ctx = this.el.nativeElement.getContext("2d");
        // if(chartCreated)
        //      chartCreated.destroy();
        //  chart = new Chart(ctx,{
        //  type: 'bar',data:this.bnChart});
        //  // chartCreated.update();
        var myChart = new chartjs_1.Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            }
        });
    };
    __decorate([
        core_1.Input('bn-chart'), 
        __metadata('design:type', Object)
    ], BnChartDirective.prototype, "bnChart", void 0);
    BnChartDirective = __decorate([
        core_1.Directive({ selector: '[bn-chart], input' }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], BnChartDirective);
    return BnChartDirective;
}());
exports.BnChartDirective = BnChartDirective;
//# sourceMappingURL=chartjs.directive.js.map
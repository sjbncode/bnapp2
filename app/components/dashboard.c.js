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
var router_1 = require('@angular/router');
var hero_s_1 = require('../services/hero.s');
var DashboardComponent = (function () {
    function DashboardComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.title = 'Tour of Heroes';
        this.heroes = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeros()
            .then(function (s) { return _this.heroes = s.slice(1, 5); });
    };
    DashboardComponent.prototype.gotoDetail = function (h) {
        var link = ['/herodetail', h.id];
        this.router.navigate(link);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "bn-dashboard",
            templateUrl: 'dashboard.html'
        }), 
        __metadata('design:paramtypes', [hero_s_1.HeroService, router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.c.js.map
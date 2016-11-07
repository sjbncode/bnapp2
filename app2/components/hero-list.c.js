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
var hero_s_1 = require('../services/hero.s');
var HeroListComponent = (function () {
    function HeroListComponent(heroService) {
        this.heroService = heroService;
        this.title = 'Tour of Heroes';
    }
    HeroListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHerosSlowly().then(function (heros) { return _this.heros = heros; });
    };
    ;
    HeroListComponent.prototype.onSelect = function (h) {
        this.selectedHero = h;
    };
    HeroListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bn-hero-list',
            templateUrl: "hero-list.html",
            styleUrls: ['hero-list.css']
        }), 
        __metadata('design:paramtypes', [hero_s_1.HeroService])
    ], HeroListComponent);
    return HeroListComponent;
}());
exports.HeroListComponent = HeroListComponent;
//# sourceMappingURL=hero-list.c.js.map
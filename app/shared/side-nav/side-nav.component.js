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
var SideNavComponent = (function () {
    function SideNavComponent() {
    }
    SideNavComponent.prototype.ngOnInit = function () {
        this.sideNavItems = [];
        this.loadSideNav();
    };
    SideNavComponent.prototype.loadSideNav = function () {
        this.sideNavItems = [
            { groupName: '', name: '首页', link: '', isParent: false, subItems: [] },
            { groupName: 'CLIMS', name: '同步状态', link: '/clims', isParent: false, subItems: [] },
            { groupName: '', name: '统计', link: '/clims/reports/monthly', isParent: false, subItems: [] },
            { groupName: '', name: '开发指南', link: '', isParent: true, subItems: [{ name: '1.概览', link: '' }, { name: '2.架构', link: '' }, { name: '3.显示数据', link: '' }] },
            { groupName: '', name: 'API参考手册', link: '', isParent: false, subItems: [] },
            { groupName: '测试', name: '教程', link: '', isParent: true, subItems: [{ name: '1.概览', link: '' }, { name: '2.架构', link: '' }, { name: '3.显示数据', link: '' }] },
            { groupName: '', name: '高级文档', link: '', isParent: true, subItems: [{ name: '1.概览', link: '' }, { name: '2.架构', link: '' }, { name: '3.显示数据', link: '' }] }
        ];
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SideNavComponent.prototype, "navItems", void 0);
    SideNavComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'side-nav',
            templateUrl: 'side-nav.component.html',
            styleUrls: ['side-nav.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], SideNavComponent);
    return SideNavComponent;
}());
exports.SideNavComponent = SideNavComponent;
//# sourceMappingURL=side-nav.component.js.map
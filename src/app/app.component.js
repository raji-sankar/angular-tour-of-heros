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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var AppComponent = (function () {
    function AppComponent(titleService) {
        this.titleService = titleService;
        this.title = 'Tour of Heroes';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Angular Tour of Heroes');
    };
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <h1>{{title}}</h1>\n  <nav>\n    <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n    <a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a>\n  </nav>\n\n  <ul>\n    <li><a (click)=\"setTitle( 'Good morning!' )\">Good morning</a>.</li>\n    <li><a (click)=\"setTitle( 'Good afternoon!' )\">Good afternoon</a>.</li>\n    <li><a (click)=\"setTitle( 'Good evening!' )\">Good evening</a>.</li>\n  </ul>\n\n  <router-outlet></router-outlet>\n  ",
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [platform_browser_1.Title])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
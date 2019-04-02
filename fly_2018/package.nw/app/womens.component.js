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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hero_service_1 = require("./hero.service");
var WomensComponent = (function () {
    function WomensComponent(heroService) {
        this.heroService = heroService;
        this.heroes = [];
        this.levelz = [
            { num: true, name: 'Да' },
            { num: false, name: 'Нет' }
        ];
        this.userFilter = { women: true };
    }
    WomensComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes; });
    };
    return WomensComponent;
}());
WomensComponent = __decorate([
    core_1.Component({
        selector: 'my-dashboard',
        templateUrl: './womens.component.html',
        styleUrls: ['./womens.component.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], WomensComponent);
exports.WomensComponent = WomensComponent;
//# sourceMappingURL=womens.component.js.map
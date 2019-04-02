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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var settings_service_1 = require("./settings.service");
var OptionDetailComponent = (function () {
    function OptionDetailComponent(optionService, route, location) {
        this.optionService = optionService;
        this.route = route;
        this.location = location;
    }
    OptionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.optionService.getOption(+params['id']); })
            .subscribe(function (option) { return _this.option = option; });
    };
    OptionDetailComponent.prototype.save = function () {
        var _this = this;
        this.optionService.update(this.option)
            .then(function () { return _this.goBack(); });
    };
    OptionDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return OptionDetailComponent;
}());
OptionDetailComponent = __decorate([
    core_1.Component({
        selector: 'option-d',
        templateUrl: './option-detail.component.html',
        styleUrls: ['./hero-detail.component.css']
    }),
    __metadata("design:paramtypes", [settings_service_1.OptionService,
        router_1.ActivatedRoute,
        common_1.Location])
], OptionDetailComponent);
exports.OptionDetailComponent = OptionDetailComponent;
//# sourceMappingURL=option-detail.component.js.map
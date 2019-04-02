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
var router_1 = require("@angular/router");
var settings_service_1 = require("./settings.service");
var OptionsComponent = (function () {
    function OptionsComponent(optionService, router) {
        this.optionService = optionService;
        this.router = router;
    }
    OptionsComponent.prototype.getOptions = function () {
        var _this = this;
        this.optionService
            .getOptions()
            .then(function (options) { return _this.options = options; });
    };
    OptionsComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.optionService.create(name)
            .then(function (option) {
            _this.options.push(option);
            _this.selectedOption = null;
        });
    };
    OptionsComponent.prototype.delete = function (option) {
        var _this = this;
        this.optionService
            .delete(option.id)
            .then(function () {
            _this.options = _this.options.filter(function (h) { return h !== option; });
            if (_this.selectedOption === option) {
                _this.selectedOption = null;
            }
        });
    };
    OptionsComponent.prototype.ngOnInit = function () {
        this.getOptions();
    };
    OptionsComponent.prototype.onSelect = function (option) {
        this.selectedOption = option;
    };
    OptionsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/option', this.selectedOption.id]);
    };
    return OptionsComponent;
}());
OptionsComponent = __decorate([
    core_1.Component({
        selector: 'my-settings',
        templateUrl: './settings.component.html',
        styleUrls: ['./settings.component.css']
    }),
    __metadata("design:paramtypes", [settings_service_1.OptionService,
        router_1.Router])
], OptionsComponent);
exports.OptionsComponent = OptionsComponent;
//# sourceMappingURL=settings.components.js.map
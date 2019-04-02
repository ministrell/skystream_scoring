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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
// import { HEROES } from './mock-heroes';
var OptionService = (function () {
    function OptionService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.settingsUrl = 'api/options'; // URL to web api
    }
    OptionService.prototype.getOptions = function () {
        return this.http.get(this.settingsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
        // return Promise.resolve(HEROES);
    };
    OptionService.prototype.getOption = function (id) {
        var url = this.settingsUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    OptionService.prototype.delete = function (id) {
        var url = this.settingsUrl + "/" + id;
        var settings = JSON.parse(localStorage.getItem('setStor'));
        // let newHerr;
        for (var i = settings.length - 1; i >= 0; i--) {
            if (settings[i].id === id) {
                settings.splice(i, 1);
                localStorage.setItem('setStor', JSON.stringify(settings));
                break;
            }
        }
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    OptionService.prototype.create = function (name) {
        var settings = JSON.parse(localStorage.getItem('setStor'));
        var lastElemId = settings.length - 1;
        var newId = settings[lastElemId].id + 1;
        var newNumber = settings[lastElemId].number + 1;
        var newHerr = { number: newNumber, id: newId };
        settings.push(newHerr);
        localStorage.setItem('setStor', JSON.stringify(settings));
        return this.http
            .post(this.settingsUrl, JSON.stringify({ fio: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    OptionService.prototype.update = function (option) {
        var setting = JSON.parse(localStorage.getItem('setStor'));
        for (var i = setting.length - 1; i >= 0; i--) {
            if (setting[i].id === option.id) {
                setting[i] = option;
            }
        }
        localStorage.setItem('setStor', JSON.stringify(setting));
        var url = this.settingsUrl + "/" + option.id;
        return this.http
            .put(url, JSON.stringify(setting), { headers: this.headers })
            .toPromise()
            .then(function () { return option; })
            .catch(this.handleError);
    };
    OptionService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return OptionService;
}());
OptionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], OptionService);
exports.OptionService = OptionService;
//# sourceMappingURL=settings.service.js.map
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
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.heroesUrl = 'api/heroes'; // URL to web api
    }
    HeroService.prototype.getHeroes = function () {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
        // return Promise.resolve(HEROES);
    };
    HeroService.prototype.getHero = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.delete = function (id) {
        var url = this.heroesUrl + "/" + id;
        var heroeses = JSON.parse(localStorage.getItem('herStor'));
        // let newHerr;
        for (var i = heroeses.length - 1; i >= 0; i--) {
            if (heroeses[i].id === id) {
                heroeses.splice(i, 1);
                localStorage.setItem('herStor', JSON.stringify(heroeses));
                break;
            }
        }
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    HeroService.prototype.create = function (name) {
        var heroeses = JSON.parse(localStorage.getItem('herStor'));
        var lastElemId = heroeses.length - 1;
        var newId = heroeses[lastElemId].id + 1;
        var newNumber = heroeses[lastElemId].number + 1;
        var newHerr = { number: newNumber, id: newId, fio: name };
        heroeses.push(newHerr);
        localStorage.setItem('herStor', JSON.stringify(heroeses));
        return this.http
            .post(this.heroesUrl, JSON.stringify({ fio: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.update = function (hero) {
        var heroeses = JSON.parse(localStorage.getItem('herStor'));
        for (var i = heroeses.length - 1; i >= 0; i--) {
            if (heroeses[i].id === hero.id) {
                var total = this.getTotal(hero);
                var teamtotal = this.getTeamTotal(hero);
                if (total !== -9999) {
                    hero.total = total;
                }
                if (teamtotal !== -9999) {
                    hero.teamtotal = teamtotal;
                }
                heroeses[i] = hero;
            }
        }
        localStorage.setItem('herStor', JSON.stringify(heroeses));
        var url = this.heroesUrl + "/" + hero.id;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    HeroService.prototype.updateTeam = function (hero) {
        var heroeses = JSON.parse(localStorage.getItem('herStor'));
        for (var i = heroeses.length - 1; i >= 0; i--) {
            if (heroeses[i].id === hero.id) {
                heroeses[i] = hero;
            }
        }
        localStorage.setItem('herStor', JSON.stringify(heroeses));
        var url = this.heroesUrl + "/" + hero.id;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    HeroService.prototype.getTeamTotal = function (hero) {
        var total = 0;
        var res = [];
        if (hero['try1'] === undefined) {
            total = -9999;
        }
        else {
            for (var index = 1; index < 13; index++) {
                var element = hero['try' + index];
                if (typeof (element) !== "undefined" && element !== null) {
                    res.push(Number(element));
                }
                total = res.reduce(function (a, b) {
                    return a + b;
                }, 0);
            }
            return total;
        }
    };
    HeroService.prototype.getTotal = function (hero) {
        var total = 0;
        var res = [];
        var maxPos = 0;
        var maxVal = null;
        if (hero['try1'] === undefined) {
            total = -9999;
        }
        else {
            for (var index = 1; index < 13; index++) {
                var element = hero['try' + index];
                if (typeof (element) !== "undefined" && element !== null) {
                    if (maxVal == null) {
                        maxVal = Number(element);
                        maxPos = index - 1;
                    }
                    else if (maxVal < Number(element)) {
                        maxVal = Number(element);
                        maxPos = index - 1;
                    }
                    res.push(Number(element));
                }
            }
            // TODO: тут кажется какая то логика, надо
            // if (res.length > 3) {
            //   res.splice(maxPos, 1);
            // }
            console.log(res);
            res.sort(function (a, b) {
                return a - b;
            });
            res.reverse();
            console.log(res);
            if (res.length > 7) {
                res.splice(0, 2);
            }
            else if (res.length > 4) {
                res.splice(0, 1);
            }
            total = res.reduce(function (a, b) {
                return a + b;
            }, 0);
        }
        return total;
    };
    HeroService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map
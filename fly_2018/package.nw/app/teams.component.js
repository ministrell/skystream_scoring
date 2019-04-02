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
var settings_service_1 = require("./settings.service");
var TeamsComponent = (function () {
    function TeamsComponent(heroService, optionService) {
        this.heroService = heroService;
        this.optionService = optionService;
        this.heroes = [];
        this.teamss = [];
        this.herosTeam = [];
        this.tem = localStorage.getItem('herStor');
        this.tem = JSON.parse(this.tem);
        for (var i = 0; i < this.tem.length; i++) {
            var element = this.tem[i].team;
            if (element !== undefined) {
                this.teamss.push(element);
            }
        }
        var teamsArr = this.teamss.filter(function (v, i, a) { return a.indexOf(v) === i; });
        var teamWtf = [];
        for (var i = 0; i < teamsArr.length; i++) {
            var el = teamsArr[i];
            var idEl = 0;
            teamWtf.push({
                id: idEl += i,
                name: el,
                member: [],
                try1: 0,
                try2: 0,
                try3: 0,
                try4: 0,
                try5: 0,
                try6: 0,
                try7: 0,
                try8: 0,
                try9: 0,
                try10: 0,
                try11: 0,
                try12: 0,
                teamtotal: 0
            });
        }
        // let newTeam: any = [];
        // 40 + 10 + 30 + 730
        for (var i = 0; i < teamWtf.length; i++) {
            for (var j = 0; j < this.tem.length; j++) {
                if (this.tem[j].team === teamWtf[i].name) {
                    teamWtf[i].member.push(this.tem[j]);
                }
            }
        }
        // calc data
        for (var _i = 0, teamWtf_1 = teamWtf; _i < teamWtf_1.length; _i++) {
            var t = teamWtf_1[_i];
            var tt1 = 0;
            var tt2 = 0;
            var tt3 = 0;
            var tt4 = 0;
            var tt5 = 0;
            var tt6 = 0;
            var tt7 = 0;
            var tt8 = 0;
            var tt9 = 0;
            var tt10 = 0;
            var tt11 = 0;
            var tt12 = 0;
            var countMemberOfTeam = t.member.length;
            var tt01 = [];
            var tt02 = [];
            var tt03 = [];
            var tt04 = [];
            var tt05 = [];
            var tt06 = [];
            var tt07 = [];
            var tt08 = [];
            var tt09 = [];
            var tt010 = [];
            var tt011 = [];
            var tt012 = [];
            // TODO: тут расчёты, надо переписать
            for (var i = 0; i < 4; i++) {
                if (t.member[i]) {
                    if (t.member[i].try1 !== undefined) {
                        tt01.push(Number(t.member[i].try1));
                    }
                    if ((t.member[i].try2 !== undefined)) {
                        tt02.push(Number(t.member[i].try2));
                    }
                    if ((t.member[i].try3 !== undefined)) {
                        tt03.push(Number(t.member[i].try3));
                    }
                    if ((t.member[i].try4 !== undefined)) {
                        tt04.push(Number(t.member[i].try4));
                    }
                    if ((t.member[i].try5 !== undefined)) {
                        tt05.push(Number(t.member[i].try5));
                    }
                    if ((t.member[i].try6 !== undefined)) {
                        tt06.push(Number(t.member[i].try6));
                    }
                    if ((t.member[i].try7 !== undefined)) {
                        tt07.push(Number(t.member[i].try7));
                    }
                    if ((t.member[i].try8 !== undefined)) {
                        tt08.push(Number(t.member[i].try8));
                    }
                    if ((t.member[i].try9 !== undefined)) {
                        tt09.push(Number(t.member[i].try9));
                    }
                    if ((t.member[i].try10 !== undefined)) {
                        tt010.push(Number(t.member[i].try10));
                    }
                    if ((t.member[i].try11 !== undefined)) {
                        tt011.push(Number(t.member[i].try11));
                    }
                    if ((t.member[i].try12 !== undefined)) {
                        tt012.push(Number(t.member[i].try12));
                    }
                }
            }
            // if (countMemberOfTeam > 3) {
            //     tt01 = this.getTTot(tt01);
            //     tt02 = this.getTTot(tt02);
            //     tt03 = this.getTTot(tt03);
            //     tt04 = this.getTTot(tt04);
            //     tt05 = this.getTTot(tt05);
            //     tt06 = this.getTTot(tt06);
            //     tt07 = this.getTTot(tt07);
            //     tt08 = this.getTTot(tt08);
            //     tt09 = this.getTTot(tt09);
            //     tt010 = this.getTTot(tt010);
            //     // Этого не было, мы добавили)
            //     tt01.sort(this.compareNumeric).splice(3, 1);
            //     tt02.sort(this.compareNumeric).splice(3, 1);
            //     tt03.sort(this.compareNumeric).splice(3, 1);
            //     tt04.sort(this.compareNumeric).splice(3, 1);
            //     tt05.sort(this.compareNumeric).splice(3, 1);
            //     tt06.sort(this.compareNumeric).splice(3, 1);
            //     tt07.sort(this.compareNumeric).splice(3, 1);
            //     tt08.sort(this.compareNumeric).splice(3, 1);
            //     tt09.sort(this.compareNumeric).splice(3, 1);
            //     tt010.sort(this.compareNumeric).splice(3, 1);
            // }
            tt1 = this.calcArr(tt01);
            tt2 = this.calcArr(tt02);
            tt3 = this.calcArr(tt03);
            tt4 = this.calcArr(tt04);
            tt5 = this.calcArr(tt05);
            tt6 = this.calcArr(tt06);
            tt7 = this.calcArr(tt07);
            tt8 = this.calcArr(tt08);
            tt9 = this.calcArr(tt09);
            tt10 = this.calcArr(tt010);
            tt11 = this.calcArr(tt011);
            tt12 = this.calcArr(tt012);
            t.try1 = tt1;
            t.try2 = tt2;
            t.try3 = tt3;
            t.try4 = tt4;
            t.try5 = tt5;
            t.try6 = tt6;
            t.try7 = tt7;
            t.try8 = tt8;
            t.try9 = tt9;
            t.try10 = tt10;
            t.try10 = tt11;
            t.try10 = tt12;
            t.teamtotal = tt1 + tt2 + tt3 + tt4 + tt5 + tt6 + tt7 + tt8 + tt9 + tt10 + tt11 + tt12;
        }
        this.teamss = teamWtf;
        // this.herosTeam = teamWtf.member;
        console.table(this.teamss);
        // console.table(this.herosTeam);
    }
    TeamsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamss;
        this.optionService.getOption(2)
            .then(function (option) { return _this.option = option; });
        // this.heroService.getHeroes()
        //     // .then(heroes => this.heroes = heroes.slice(1, 5));
        //     .then(heroes => this.teamss = heroes);
    };
    // onSelect(team: Hero): void {
    //     this.selectedTeam = team;
    // }
    TeamsComponent.prototype.calcArr = function (arrRes) {
        var z = arrRes.reduce(function (a, b) {
            return a + b;
        }, 0);
        return z;
    };
    // TODO: тут расчёты, их надо поменять
    TeamsComponent.prototype.getTTot = function (arr) {
        if (arr.length > 3) {
            arr.sort(this.compareNumeric).splice(3, 1);
        }
        return arr;
    };
    TeamsComponent.prototype.compareNumeric = function (a, b) {
        if (a > b) {
            return 1;
        }
        ;
        if (a < b) {
            return -1;
        }
        ;
    };
    return TeamsComponent;
}());
TeamsComponent = __decorate([
    core_1.Component({
        selector: 'my-dashboard',
        templateUrl: './teams.component.html',
        styleUrls: ['./teams.component.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService, settings_service_1.OptionService])
], TeamsComponent);
exports.TeamsComponent = TeamsComponent;
//# sourceMappingURL=teams.component.js.map
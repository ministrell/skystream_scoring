import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Option } from './settings';
import { OptionService } from './settings.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './teams.component.html',
    styleUrls: ['./teams.component.css']
})

export class TeamsComponent implements OnInit {

    heroes: Hero[] = [];
    tem: any;
    teamss: any = [];
    herosTeam: any = [];
    selectedTeam: Hero;
    option: Option;



    constructor(private heroService: HeroService, private optionService: OptionService) {
        this.tem = localStorage.getItem('herStor');
        this.tem = JSON.parse(this.tem);
        for (let i = 0; i < this.tem.length; i++) {
            let element = this.tem[i].team;
            if (element !== undefined) {
                this.teamss.push(element);
            }
        }
        let teamsArr = this.teamss.filter((v: any, i: any, a: any) => a.indexOf(v) === i);
        let teamWtf: any = [];
        for (let i = 0; i < teamsArr.length; i++) {
            let el = teamsArr[i];
            let idEl = 0;
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
        for (let i = 0; i < teamWtf.length; i++) {
            for (let j = 0; j < this.tem.length; j++) {
                if (this.tem[j].team === teamWtf[i].name) {
                    teamWtf[i].member.push(this.tem[j]);
                }
            }
        }
        // calc data
        for (let t of teamWtf) {
            let tt1 = 0;
            let tt2 = 0;
            let tt3 = 0;
            let tt4 = 0;
            let tt5 = 0;
            let tt6 = 0;
            let tt7 = 0;
            let tt8 = 0;
            let tt9 = 0;
            let tt10 = 0;
            let tt11 = 0;
            let tt12 = 0;
            let countMemberOfTeam = t.member.length;
            let tt01 = [];
            let tt02 = [];
            let tt03 = [];
            let tt04 = [];
            let tt05 = [];
            let tt06 = [];
            let tt07 = [];
            let tt08 = [];
            let tt09 = [];
            let tt010 = [];
            let tt011 = [];
            let tt012 = [];
            // TODO: тут расчёты, надо переписать
            for (let i = 0; i < 4; i++) {
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
                    } if ((t.member[i].try12 !== undefined)) {
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


    ngOnInit(): void {
        this.teamss;
        this.optionService.getOption(2)
            .then(option => this.option = option);
        // this.heroService.getHeroes()
        //     // .then(heroes => this.heroes = heroes.slice(1, 5));
        //     .then(heroes => this.teamss = heroes);
    }


    // onSelect(team: Hero): void {
    //     this.selectedTeam = team;
    // }

    calcArr(arrRes: any): number {
        let z = arrRes.reduce(function (a: number, b: number): number {
            return a + b;
        }, 0);
        return z;
    }
    // TODO: тут расчёты, их надо поменять
    getTTot(arr: any): any {
        if (arr.length > 3) {
            arr.sort(this.compareNumeric).splice(3, 1);
        }
        return arr;
    }

    compareNumeric(a: number, b: number): number {
        if (a > b) {
            return 1;
        };
        if (a < b) {
            return -1;
        };
    }

}

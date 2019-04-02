import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './womens.component.html',
    styleUrls: ['./womens.component.css']
})

export class WomensComponent implements OnInit {
    heroes: Hero[] = [];


    levelz: Array<Object> = [
        { num: true, name: 'Да' },
        { num: false, name: 'Нет' }
    ];

    userFilter: any = { women: true };


    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
            // .then(heroes => this.heroes = heroes.slice(1, 5));
            .then(heroes => this.heroes = heroes);


    }


}

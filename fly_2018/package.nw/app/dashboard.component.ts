import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Option } from './settings';
import { OptionService } from './settings.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    option: Option;

    constructor(private heroService: HeroService, private optionService: OptionService) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
        this.optionService.getOption(1)
            .then(option => this.option = option);
    }
}

import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-team-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroTeamDetailComponent implements OnInit {
  team: Hero;

  levelz: Array<Object> = [
    { num: true, name: 'Да' },
    { num: false, name: 'Нет' }
  ];

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {

    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.team = hero);
  }

  save(): void {
    this.heroService.update(this.team)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}

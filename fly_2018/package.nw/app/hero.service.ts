import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
// import { HEROES } from './mock-heroes';


@Injectable()
export class HeroService {


  private headers = new Headers({ 'Content-Type': 'application/json' });
  private heroesUrl = 'api/heroes'; // URL to web api

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
    // return Promise.resolve(HEROES);

  }


  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;

    let heroeses = JSON.parse(localStorage.getItem('herStor'));
    // let newHerr;

    for (let i = heroeses.length - 1; i >= 0; i--) {

      if (heroeses[i].id === id) {
        heroeses.splice(i, 1);
        localStorage.setItem('herStor', JSON.stringify(heroeses));
        break;
      }
    }

    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {

    let heroeses = JSON.parse(localStorage.getItem('herStor'));

    let lastElemId: number = heroeses.length - 1;
    let newId: number = heroeses[lastElemId].id + 1;
    let newNumber: number = heroeses[lastElemId].number + 1;

    let newHerr = { number: newNumber, id: newId, fio: name };

    heroeses.push(newHerr);
    localStorage.setItem('herStor', JSON.stringify(heroeses));

    return this.http
      .post(this.heroesUrl, JSON.stringify({ fio: name }), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    let heroeses = JSON.parse(localStorage.getItem('herStor'));
    for (let i = heroeses.length - 1; i >= 0; i--) {
      if (heroeses[i].id === hero.id) {
        let total = this.getTotal(hero);
        let teamtotal = this.getTeamTotal(hero);
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
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), { headers: this.headers })
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  updateTeam(hero: Hero): Promise<Hero> {
    let heroeses = JSON.parse(localStorage.getItem('herStor'));
    for (let i = heroeses.length - 1; i >= 0; i--) {
      if (heroeses[i].id === hero.id) {
        heroeses[i] = hero;
      }
    }
    localStorage.setItem('herStor', JSON.stringify(heroeses));
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), { headers: this.headers })
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  private getTeamTotal(hero: Hero): number {
    let total = 0;
    let res = [];

    if (hero['try1'] === undefined) {
      total = -9999;
    } else {
      for (let index = 1; index < 13; index++) {
        let element: number = hero['try' + index];
        if (typeof (element) !== "undefined" && element !== null) {
          res.push(Number(element));
        }
        total = res.reduce(function (a: number, b: number): number {
          return a + b;
        }, 0);
      }
      return total;

    }

  private getTotal(hero: Hero): number {
    let total = 0;
    let res = [];
    let maxPos = 0;
    let maxVal = null;
    if (hero['try1'] === undefined) {
      total = -9999;
    } else {
      for (let index = 1; index < 13; index++) {
        let element: number = hero['try' + index];
        if (typeof (element) !== "undefined" && element !== null) {
          if (maxVal == null) {
            maxVal = Number(element);
            maxPos = index - 1;
          } else if (maxVal < Number(element)) {
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

      res.sort(function (a: number, b: number): number {
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
      total = res.reduce(function (a: number, b: number): number {
        return a + b;
      }, 0);
    }
    return total;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

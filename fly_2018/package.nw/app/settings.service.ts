import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Option } from './settings';
// import { HEROES } from './mock-heroes';


@Injectable()
export class OptionService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private settingsUrl = 'api/options'; // URL to web api

  constructor(private http: Http) { }

  getOptions(): Promise<Option[]> {
    return this.http.get(this.settingsUrl)
      .toPromise()
      .then(response => response.json().data as Option[])
      .catch(this.handleError);
    // return Promise.resolve(HEROES);
  }


  getOption(id: number): Promise<Option> {
    const url = `${this.settingsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Option)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.settingsUrl}/${id}`;

    let settings = JSON.parse(localStorage.getItem('setStor'));
    // let newHerr;

    for (let i = settings.length - 1; i >= 0; i--) {

      if (settings[i].id === id) {
        settings.splice(i, 1);
        localStorage.setItem('setStor', JSON.stringify(settings));
        break;
      }
    }

    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Option> {

    let settings = JSON.parse(localStorage.getItem('setStor'));

    let lastElemId: number = settings.length - 1;
    let newId: number = settings[lastElemId].id + 1;
    let newNumber: number = settings[lastElemId].number + 1;

    let newHerr = { number: newNumber, id: newId };

    settings.push(newHerr);
    localStorage.setItem('setStor', JSON.stringify(settings));

    return this.http
      .post(this.settingsUrl, JSON.stringify({ fio: name }), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Option)
      .catch(this.handleError);
  }

  update(option: Option): Promise<Option> {
    let setting = JSON.parse(localStorage.getItem('setStor'));

    for (let i = setting.length - 1; i >= 0; i--) {
      if (setting[i].id === option.id) {
        setting[i] = option;
      }
    }

    localStorage.setItem('setStor', JSON.stringify(setting));
    const url = `${this.settingsUrl}/${option.id}`;
    return this.http
      .put(url, JSON.stringify(setting), { headers: this.headers })
      .toPromise()
      .then(() => option)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

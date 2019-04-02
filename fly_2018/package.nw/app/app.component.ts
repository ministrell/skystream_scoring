import { Component } from '@angular/core';
// import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">ОБЩИЙ ЗАЧЕТ</a>
      <a routerLink="/womens" routerLinkActive="active">ЖЕНЩИНЫ</a>
      <a routerLink="/teams" routerLinkActive="active">КОМАНДЫ</a>
      <a routerLink="/heroes" routerLinkActive="active">РЕДАКТИРОВАНИЕ</a>
      <a routerLink="/options" routerLinkActive="active">
      <svg height='20' width='20'  fill="#ff0000" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve"><path style="" d="M100,56.152v-12.5l-14.941-6.226c-0.415-1.172-0.854-2.308-1.392-3.418l6.03-15.015l-8.838-8.838  l-14.881,6.128c-1.135-0.55-2.295-1.013-3.49-1.44L56.152,0h-12.5l-6.177,14.795c-1.245,0.439-2.441,0.903-3.626,1.465  l-14.855-5.969l-8.838,8.838l6.055,14.721c-0.586,1.209-1.062,2.441-1.514,3.711L0,43.848v12.5l14.709,6.128  c0.452,1.27,0.94,2.503,1.526,3.711l-5.944,14.819l8.838,8.838l14.758-6.079c1.184,0.562,2.393,1.013,3.638,1.44L43.848,100h12.5  l6.189-14.868c1.184-0.439,2.355-0.903,3.479-1.44l14.99,6.006l8.838-8.838l-6.152-14.917c0.525-1.123,0.952-2.259,1.367-3.418  L100,56.152z M49.902,68.75c-10.352,0-18.75-8.398-18.75-18.75s8.398-18.75,18.75-18.75s18.75,8.398,18.75,18.75  S60.254,68.75,49.902,68.75z" fill="#ff0000"></path></svg>
      </a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Соревнования по прыжкам на точность';
  // constructor() {
  //   Observable.interval(500)
  //     .take(999999).map((x) => x + 1)
  //     .subscribe((x) => {
  //       this.message = x;
  //     });
  // }
}

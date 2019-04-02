"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { Observable } from 'rxjs/Rx';
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Соревнования по прыжкам на точность';
        // constructor() {
        //   Observable.interval(500)
        //     .take(999999).map((x) => x + 1)
        //     .subscribe((x) => {
        //       this.message = x;
        //     });
        // }
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <nav>\n      <a routerLink=\"/dashboard\" routerLinkActive=\"active\">\u041E\u0411\u0429\u0418\u0419 \u0417\u0410\u0427\u0415\u0422</a>\n      <a routerLink=\"/womens\" routerLinkActive=\"active\">\u0416\u0415\u041D\u0429\u0418\u041D\u042B</a>\n      <a routerLink=\"/teams\" routerLinkActive=\"active\">\u041A\u041E\u041C\u0410\u041D\u0414\u042B</a>\n      <a routerLink=\"/heroes\" routerLinkActive=\"active\">\u0420\u0415\u0414\u0410\u041A\u0422\u0418\u0420\u041E\u0412\u0410\u041D\u0418\u0415</a>\n      <a routerLink=\"/options\" routerLinkActive=\"active\">\n      <svg height='20' width='20'  fill=\"#ff0000\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" style=\"enable-background:new 0 0 100 100;\" xml:space=\"preserve\"><path style=\"\" d=\"M100,56.152v-12.5l-14.941-6.226c-0.415-1.172-0.854-2.308-1.392-3.418l6.03-15.015l-8.838-8.838  l-14.881,6.128c-1.135-0.55-2.295-1.013-3.49-1.44L56.152,0h-12.5l-6.177,14.795c-1.245,0.439-2.441,0.903-3.626,1.465  l-14.855-5.969l-8.838,8.838l6.055,14.721c-0.586,1.209-1.062,2.441-1.514,3.711L0,43.848v12.5l14.709,6.128  c0.452,1.27,0.94,2.503,1.526,3.711l-5.944,14.819l8.838,8.838l14.758-6.079c1.184,0.562,2.393,1.013,3.638,1.44L43.848,100h12.5  l6.189-14.868c1.184-0.439,2.355-0.903,3.479-1.44l14.99,6.006l8.838-8.838l-6.152-14.917c0.525-1.123,0.952-2.259,1.367-3.418  L100,56.152z M49.902,68.75c-10.352,0-18.75-8.398-18.75-18.75s8.398-18.75,18.75-18.75s18.75,8.398,18.75,18.75  S60.254,68.75,49.902,68.75z\" fill=\"#ff0000\"></path></svg>\n      </a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
        styleUrls: ['./app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
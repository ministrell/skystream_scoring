"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard.component");
var womens_component_1 = require("./womens.component");
var heroes_component_1 = require("./heroes.component");
var teams_component_1 = require("./teams.component");
var hero_detail_component_1 = require("./hero-detail.component");
var hero_team_detail_component_1 = require("./hero-team-detail.component");
var settings_components_1 = require("./settings.components");
var option_detail_component_1 = require("./option-detail.component");
var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'detail/:id', component: hero_detail_component_1.HeroDetailComponent },
    { path: 'teamsdetail/:id', component: hero_team_detail_component_1.HeroTeamDetailComponent },
    { path: 'womens', component: womens_component_1.WomensComponent },
    { path: 'teams', component: teams_component_1.TeamsComponent },
    { path: 'heroes', component: heroes_component_1.HeroesComponent },
    { path: 'options', component: settings_components_1.OptionsComponent },
    { path: 'option/:id', component: option_detail_component_1.OptionDetailComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map
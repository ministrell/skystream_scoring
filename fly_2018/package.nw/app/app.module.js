"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ng2_order_pipe_1 = require("ng2-order-pipe");
var ng2_filter_pipe_1 = require("ng2-filter-pipe");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./dashboard.component");
var womens_component_1 = require("./womens.component");
var teams_component_1 = require("./teams.component");
var heroes_component_1 = require("./heroes.component");
var hero_detail_component_1 = require("./hero-detail.component");
var hero_team_detail_component_1 = require("./hero-team-detail.component");
var hero_service_1 = require("./hero.service");
var hero_search_component_1 = require("./hero-search.component");
var settings_components_1 = require("./settings.components");
var settings_service_1 = require("./settings.service");
var option_detail_component_1 = require("./option-detail.component");
// import { OrderBy } from './orderBy';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
            app_routing_module_1.AppRoutingModule,
            ng2_order_pipe_1.Ng2OrderModule,
            ng2_filter_pipe_1.Ng2FilterPipeModule
        ],
        declarations: [
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            hero_detail_component_1.HeroDetailComponent,
            heroes_component_1.HeroesComponent,
            womens_component_1.WomensComponent,
            hero_search_component_1.HeroSearchComponent,
            teams_component_1.TeamsComponent,
            hero_team_detail_component_1.HeroTeamDetailComponent,
            settings_components_1.OptionsComponent,
            option_detail_component_1.OptionDetailComponent
            // OrderBy
        ],
        providers: [hero_service_1.HeroService, settings_service_1.OptionService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
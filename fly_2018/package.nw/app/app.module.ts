import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { WomensComponent } from './womens.component';
import { TeamsComponent } from './teams.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroTeamDetailComponent } from './hero-team-detail.component';
import { HeroService } from './hero.service';
import { HeroSearchComponent } from './hero-search.component';
import { OptionsComponent } from './settings.components';
import { OptionService } from './settings.service';
import { OptionDetailComponent } from './option-detail.component';
// import { OrderBy } from './orderBy';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    Ng2OrderModule,
    Ng2FilterPipeModule

  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    WomensComponent,
    HeroSearchComponent,
    TeamsComponent,
    HeroTeamDetailComponent,
    OptionsComponent,
    OptionDetailComponent
    // OrderBy
  ],
  providers: [HeroService, OptionService],
  bootstrap: [AppComponent]
})



export class AppModule { }

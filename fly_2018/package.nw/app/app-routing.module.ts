import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { WomensComponent } from './womens.component';
import { HeroesComponent } from './heroes.component';
import { TeamsComponent } from './teams.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroTeamDetailComponent } from './hero-team-detail.component';
import { OptionsComponent } from './settings.components';
import { OptionDetailComponent } from './option-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'teamsdetail/:id', component: HeroTeamDetailComponent },
  { path: 'womens', component: WomensComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'options', component: OptionsComponent },
  { path: 'option/:id', component: OptionDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

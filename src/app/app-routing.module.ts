import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {AllComponent} from '@app/all/all.component';
import {ActiveComponent} from '@app/active/active.component';
import {CompletedComponent} from '@app/completed/completed.component';
import {AppComponent} from '@app/app.component';
const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent },

  { path: 'all', component: AllComponent },
  { path: 'active', component: ActiveComponent },
  { path: 'completed', component: CompletedComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

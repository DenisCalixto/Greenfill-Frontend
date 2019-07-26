import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent} from './components/landing/landing.component';
import { InfoComponent} from './components/info/info.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './components/search/search.component';
import { CanadaProgressChartComponent } from './components/canada-progress-chart/canada-progress-chart.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'info', component: InfoComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: AuthComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'search', component: SearchComponent},
  {path: 'search/:id', component: SearchComponent},
  {path: 'canada-progress-chart', component: CanadaProgressChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AboutComponent} from '../about/about.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {MarketingComponent} from '../marketing/marketing.component';
import {LoginComponent} from '../login/login.component';
import {LogoutComponent} from '../logout/logout.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: '', component: MarketingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule {
}

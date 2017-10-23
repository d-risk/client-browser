import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ResetPasswordComponent} from '../reset-password/reset-password.component';
import {SignUpComponent} from '../sign-up/sign-up.component';

const routes: Routes = [
  {path: 'reset', component: ResetPasswordComponent},
  {path: 'signup', component: SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}

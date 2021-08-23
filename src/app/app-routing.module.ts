import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) }, 
{ path: 'landing', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
{ path: 'forgotpassword', loadChildren: () => import('./auth/forgotpassword/forgotpassword.module').then(m => m.ForgotpasswordModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { SharedModule } from '../shared/shared/shared.module';


const routes: Routes = [
{ path: '', component: LandingComponent , children:[
{ path: '', loadChildren: () => import('../component/blog/showall/showall.module').then(m => m.ShowallModule)},
{ path: 'createblog', loadChildren: () => import('../component/blog/create/create.module').then(m => m.CreateModule) }, 
{ path: 'showallblogs', loadChildren: () => import('../component/blog/showall/showall.module').then(m => m.ShowallModule)},
{ path: 'singlepost/:id', loadChildren: () => import('../component/blog/showall/singlepost/singlepost.module').then(m => m.SinglepostModule)}
] },
];

@NgModule({
  imports: [RouterModule.forChild(routes),SharedModule],
  exports: [RouterModule]
})
export class LandingRoutingModule { }

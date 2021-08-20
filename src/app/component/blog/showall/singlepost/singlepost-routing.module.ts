import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglepostComponent } from './singlepost.component';

const routes: Routes = [{ path: '', component: SinglepostComponent , children:[
  { path:'postcomment', loadChildren: () => import ('./comment/postcomment/postcomment.module').then(m => m.PostcommentModule)},
  { path:'comments', loadChildren: () => import ('./comment/getcomments/getcomments.module').then(m => m.GetcommentsModule)}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SinglepostRoutingModule { }

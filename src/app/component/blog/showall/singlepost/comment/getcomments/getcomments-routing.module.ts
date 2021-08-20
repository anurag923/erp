import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetcommentsComponent } from './getcomments.component';

const routes: Routes = [{ path: '', component: GetcommentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetcommentsRoutingModule { }

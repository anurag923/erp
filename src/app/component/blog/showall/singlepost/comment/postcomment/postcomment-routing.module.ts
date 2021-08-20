import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostcommentComponent } from './postcomment.component';

const routes: Routes = [{ path: '', component: PostcommentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostcommentRoutingModule { }

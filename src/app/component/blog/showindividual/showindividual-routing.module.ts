import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowindividualComponent } from './showindividual.component';

const routes: Routes = [{ path: '', component: ShowindividualComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowindividualRoutingModule { }

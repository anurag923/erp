import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowindividualRoutingModule } from './showindividual-routing.module';
import { ShowindividualComponent } from './showindividual.component';


@NgModule({
  declarations: [
    ShowindividualComponent
  ],
  imports: [
    CommonModule,
    ShowindividualRoutingModule
  ]
})
export class ShowindividualModule { }

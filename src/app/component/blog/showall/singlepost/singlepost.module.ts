import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { SinglepostRoutingModule } from './singlepost-routing.module';
import { SinglepostComponent } from './singlepost.component';


@NgModule({
  declarations: [
    SinglepostComponent
  ],
  imports: [
    CommonModule,
    SinglepostRoutingModule,
    SharedModule
  ]
})
export class SinglepostModule { }

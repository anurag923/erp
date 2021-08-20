import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { GetcommentsRoutingModule } from './getcomments-routing.module';
import { GetcommentsComponent } from './getcomments.component';


@NgModule({
  declarations: [
    GetcommentsComponent
  ],
  imports: [
    CommonModule,
    GetcommentsRoutingModule,
    SharedModule
  ]
})
export class GetcommentsModule { }

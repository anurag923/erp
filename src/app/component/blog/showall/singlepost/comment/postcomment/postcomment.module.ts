import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { PostcommentRoutingModule } from './postcomment-routing.module';
import { PostcommentComponent } from './postcomment.component';


@NgModule({
  declarations: [
    PostcommentComponent
  ],
  imports: [
    CommonModule,
    PostcommentRoutingModule,
    SharedModule
  ]
})
export class PostcommentModule { }

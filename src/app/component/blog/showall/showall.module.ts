import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ShowallRoutingModule } from './showall-routing.module';
import { ShowallComponent } from './showall.component';


@NgModule({
  declarations: [
    ShowallComponent
  ],
  imports: [
    CommonModule,
    ShowallRoutingModule,
    SharedModule
  ]
})
export class ShowallModule { }

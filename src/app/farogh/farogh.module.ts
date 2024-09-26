import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaroghRoutingModule } from './farogh-routing.module';
import { FarComponent } from './far/far.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FarComponent
  ],
  imports: [
    CommonModule,
    FaroghRoutingModule,
    SharedModule
  ]
})
export class FaroghModule { }

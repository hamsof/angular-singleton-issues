import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HamzaRoutingModule } from './hamza-routing.module';
import { HamComponent } from './ham/ham.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HamComponent
  ],
  imports: [
    CommonModule,
    HamzaRoutingModule,
    SharedModule
  ]
})
export class HamzaModule { }

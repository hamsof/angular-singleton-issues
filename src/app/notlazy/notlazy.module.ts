import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotlazyRoutingModule } from './notlazy-routing.module';
import { NotlazyComponent } from './notlazy/notlazy.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    NotlazyComponent
  ],
  imports: [
    CommonModule,
    NotlazyRoutingModule,
    SharedModule
  ]
})
export class NotlazyModule { }

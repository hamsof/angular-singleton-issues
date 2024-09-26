import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarComponent } from './far/far.component';

const routes: Routes = [
  {path : '', component: FarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaroghRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HamComponent } from './ham/ham.component';

const routes: Routes = [
  {path: '', component: HamComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HamzaRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotlazyComponent } from './notlazy/notlazy.component';

const routes: Routes = [
  {path: 'notlazy', component: NotlazyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotlazyRoutingModule { }

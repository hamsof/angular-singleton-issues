import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';

const routes: Routes = [
  {
    path: 'farogh',
    loadChildren: () =>
      import('./farogh/farogh.module').then((m) => m.FaroghModule),
  },
  {
    path: 'hamza',
    loadChildren: () =>
      import('./hamza/hamza.module').then((m) => m.HamzaModule),
  },
  {
    path: 'same',
    component: AddTutorialComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

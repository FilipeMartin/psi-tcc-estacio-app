import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeriesPage } from './series.page';

const routes: Routes = [
  {
    path: '',
    component: SeriesPage
  },
  {
    path: 'exercicio/:id',
    loadChildren: () => import('./exercicio/exercicio.module').then( m => m.ExercicioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeriesPageRoutingModule {}

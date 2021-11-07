import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciciosPage } from './exercicios.page';

const routes: Routes = [
  {
    path: '',
    component: ExerciciosPage
  },
  {
    path: 'exercicios/:exercicioId',
    loadChildren: () => import('./exercicio/exercicio.module').then( m => m.ExercicioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciciosPageRoutingModule {}

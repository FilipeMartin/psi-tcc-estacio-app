import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargaExerciciosPage } from './carga-exercicios.page';

const routes: Routes = [
  {
    path: '',
    component: CargaExerciciosPage
  },
  {
    path: ':cargaExercicioId',
    loadChildren: () => import('./exercicios/exercicios.module').then( m => m.ExerciciosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargaExerciciosPageRoutingModule {}

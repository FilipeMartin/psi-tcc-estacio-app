import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvaliacoesPage } from './avaliacoes.page';

const routes: Routes = [
  {
    path: '',
    component: AvaliacoesPage
  },
  {
    path: 'avaliacao/:avaliacao',
    loadChildren: () => import('./avaliacao/avaliacao.module').then( m => m.AvaliacaoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvaliacoesPageRoutingModule {}

import { NgModule } from '@angular/core';
import { AvaliacoesPageRoutingModule } from './avaliacoes-routing.module';
import { AvaliacoesPage } from './avaliacoes.page';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AvaliacoesPageRoutingModule
  ],
  declarations: [AvaliacoesPage]
})
export class AvaliacoesPageModule {}

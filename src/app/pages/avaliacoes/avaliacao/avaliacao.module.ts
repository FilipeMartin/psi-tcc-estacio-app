import { NgModule } from '@angular/core';
import { AvaliacaoPageRoutingModule } from './avaliacao-routing.module';
import { AvaliacaoPage } from './avaliacao.page';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AvaliacaoPageRoutingModule
  ],
  declarations: [AvaliacaoPage]
})
export class AvaliacaoPageModule {}

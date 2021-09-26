import { NgModule } from '@angular/core';
import { UnidadesPageRoutingModule } from './unidades-routing.module';
import { UnidadesPage } from './unidades.page';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [
    SharedModule,
    UnidadesPageRoutingModule
  ],
  declarations: [UnidadesPage]
})
export class UnidadesPageModule {}

import { NgModule } from '@angular/core';
import { CargaExerciciosPageRoutingModule } from './carga-exercicios-routing.module';
import { CargaExerciciosPage } from './carga-exercicios.page';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CargaExerciciosPageRoutingModule
  ],
  declarations: [CargaExerciciosPage]
})
export class CargaExerciciosPageModule {}

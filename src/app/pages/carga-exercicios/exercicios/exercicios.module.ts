import { NgModule } from '@angular/core';
import { ExerciciosPageRoutingModule } from './exercicios-routing.module';
import { ExerciciosPage } from './exercicios.page';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ExerciciosPageRoutingModule
  ],
  declarations: [ExerciciosPage]
})
export class ExerciciosPageModule {}

import { NgModule } from '@angular/core';
import { ExercicioPageRoutingModule } from './exercicio-routing.module';
import { ExercicioPage } from './exercicio.page';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ExercicioPageRoutingModule
  ],
  declarations: [ExercicioPage]
})
export class ExercicioPageModule {}

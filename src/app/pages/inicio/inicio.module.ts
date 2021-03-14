import { NgModule } from '@angular/core';
import { InicioPageRoutingModule } from './inicio-routing.module';
import { InicioPage } from './inicio.page';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [
    SharedModule,
    InicioPageRoutingModule
  ],
  declarations: [InicioPage]
})
export class InicioPageModule {}

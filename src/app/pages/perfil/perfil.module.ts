import { NgModule } from '@angular/core';
import { PerfilPageRoutingModule } from './perfil-routing.module';
import { PerfilPage } from './perfil.page';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [
    SharedModule,
    PerfilPageRoutingModule
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}

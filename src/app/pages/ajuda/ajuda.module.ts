import { NgModule } from '@angular/core';
import { AjudaPageRoutingModule } from './ajuda-routing.module';
import { AjudaPage } from './ajuda.page';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AjudaPageRoutingModule
  ],
  declarations: [AjudaPage]
})
export class AjudaPageModule {}

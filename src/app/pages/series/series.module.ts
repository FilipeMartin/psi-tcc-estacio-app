import { NgModule } from '@angular/core';
import { SeriesPageRoutingModule } from './series-routing.module';
import { SeriesPage } from './series.page';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [
    SharedModule,
    SeriesPageRoutingModule
  ],
  declarations: [SeriesPage]
})
export class SeriesPageModule {}

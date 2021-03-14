import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


const components = [
  HeaderComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    FormsModule
  ],
  exports: [...components]
})
export class ComponentsModule { }

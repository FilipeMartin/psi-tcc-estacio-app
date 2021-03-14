import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIInterceptor } from './services/api-interceptor.service';


const modules = [
  IonicModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  ComponentsModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true},
  ]
})
export class SharedModule { }

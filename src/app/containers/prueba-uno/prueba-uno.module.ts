import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebaUnoComponent } from './prueba-uno.component';
import { PruebaUnoRoutingModule } from './prueba-uno-routing.module';

@NgModule({
  declarations: [PruebaUnoComponent],
  imports: [
    CommonModule,
    PruebaUnoRoutingModule
  ]
})
export class PruebaUnoModule { }

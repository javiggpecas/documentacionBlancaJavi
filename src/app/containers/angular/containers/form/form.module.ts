import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { PruebaUnoRoutingModule } from './form-routing.module';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    PruebaUnoRoutingModule
  ]
})
export class FormsModule { }

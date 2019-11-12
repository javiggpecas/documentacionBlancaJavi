import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { PruebaUnoRoutingModule } from './form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    PruebaUnoRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormsModule { }

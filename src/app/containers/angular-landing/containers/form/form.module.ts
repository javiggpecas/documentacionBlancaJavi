import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormRoutingModule } from './form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class FormModule { }

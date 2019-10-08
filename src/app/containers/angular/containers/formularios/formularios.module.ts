import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulariosRoutingModule } from './formularios-routing.module';
import { MatExpansionModule, MatButtonModule, MatFormFieldModule, MatInputModule,
  MatNativeDateModule } from '@angular/material';
import { FormulariosComponent } from './formularios.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormulariosComponent
  ],
  imports: [ // importo lo que vaya a usar en este componente
    CommonModule,
    FormulariosRoutingModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormulariosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponentsRoutingModule } from './form-components-routing.module';
import { MatExpansionModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { FormComponentsComponent } from './form-components.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [FormComponentsComponent],
  imports: [ // importo lo que vaya a usar en este componente
    CommonModule,
    FormComponentsRoutingModule,
    SharedModule,
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
export class FormComponentsModule { }

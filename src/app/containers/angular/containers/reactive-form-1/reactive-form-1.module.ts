import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveForm1Component } from './reactive-form-1.component';
import { MatFormFieldModule, MatExpansionModule, MatButtonModule, MatDatepickerModule,
  MatInputModule, MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveForm1RoutingModule } from './reactive-form-1-routing.module';

@NgModule({
  declarations: [ReactiveForm1Component],
  imports: [
    CommonModule,
    ReactiveForm1RoutingModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReactiveForm1Module { }

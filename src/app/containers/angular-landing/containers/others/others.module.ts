import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OthersComponent } from './others.component';
import { MatFormFieldModule, MatExpansionModule, MatButtonModule, MatDatepickerModule,
  MatInputModule, MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveForm1RoutingModule } from './others-routing.module';

@NgModule({
  declarations: [OthersComponent],
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
export class OthersModule { }

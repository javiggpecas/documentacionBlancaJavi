import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OthersComponent } from './others.component';
import { MatFormFieldModule, MatExpansionModule, MatButtonModule, MatDatepickerModule,
  MatInputModule, MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OthersRoutingModule } from './others-routing.module';

@NgModule({
  declarations: [OthersComponent],
  imports: [
    CommonModule,
    OthersRoutingModule,
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

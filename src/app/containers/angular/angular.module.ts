import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularRoutingModule } from './angular-routing.module';
import { AngularComponent } from './angular.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AngularComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AngularRoutingModule
  ]
})
export class AngularModule { }

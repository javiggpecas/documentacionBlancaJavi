import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularRoutingModule } from './angular-landing-routing.module';
import { AngularLandingComponent } from './angular-landing.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AngularLandingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AngularRoutingModule
  ]
})
export class AngularLandingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsLandingRoutingModule } from './js-landing-routing.module';
import { JsLandingComponent } from './js-landing.component';

@NgModule({
  declarations: [
    JsLandingComponent
  ],
  imports: [
    CommonModule,
    JsLandingRoutingModule
  ]
})
export class JsLandingModule { }

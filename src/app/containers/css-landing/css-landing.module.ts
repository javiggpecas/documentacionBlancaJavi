import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssLandingRoutingModule } from './css-landing-routing.module';
import { CssLandingComponent } from './css-landing.component';

@NgModule({
  declarations: [
    CssLandingComponent
  ],
  imports: [
    CommonModule,
    CssLandingRoutingModule
  ]
})
export class CssLandingModule { }

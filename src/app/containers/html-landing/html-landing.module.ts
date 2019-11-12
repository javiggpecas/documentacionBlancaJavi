import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlLandingRoutingModule } from './html-landing-routing.module';
import { HtmlLandingComponent } from './html-landing.component';

@NgModule({
  declarations: [
    HtmlLandingComponent
  ],
  imports: [
    CommonModule,
    HtmlLandingRoutingModule
  ]
})
export class HtmlLandingModule { }

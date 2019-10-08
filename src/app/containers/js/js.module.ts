import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsRoutingModule } from './js-routing.module';
import { JsComponent } from './js.component';

@NgModule({
  declarations: [
    JsComponent
  ],
  imports: [
    CommonModule,
    JsRoutingModule
  ]
})
export class JsModule { }

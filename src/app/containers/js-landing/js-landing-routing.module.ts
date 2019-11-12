import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsLandingComponent } from './js-landing.component';

const routes: Routes = [
  {
    path: '',
    component: JsLandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsLandingRoutingModule { }

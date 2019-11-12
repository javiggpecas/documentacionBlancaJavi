import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HtmlLandingComponent } from './html-landing.component';

const routes: Routes = [
  {
    path: '',
    component: HtmlLandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HtmlLandingRoutingModule { }

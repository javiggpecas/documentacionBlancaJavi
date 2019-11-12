import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CssLandingComponent } from './css-landing.component';

const routes: Routes = [
  {
    path: '',
    component: CssLandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssLandingRoutingModule { }

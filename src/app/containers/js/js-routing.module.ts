import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsComponent } from './js.component';

const routes: Routes = [
  {
    path: '',
    component: JsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsRoutingModule { }

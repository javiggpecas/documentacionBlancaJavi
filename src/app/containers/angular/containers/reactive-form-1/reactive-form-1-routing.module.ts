import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveForm1Component } from './reactive-form-1.component';

const routes: Routes = [
  {
    path: '',
    component: ReactiveForm1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveForm1RoutingModule { }

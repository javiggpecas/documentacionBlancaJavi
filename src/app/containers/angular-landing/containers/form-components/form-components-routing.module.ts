import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponentsComponent } from './form-components.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormComponentsRoutingModule { }

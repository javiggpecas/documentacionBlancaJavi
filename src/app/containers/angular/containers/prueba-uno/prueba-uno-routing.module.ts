import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebaUnoComponent } from './prueba-uno.component';

const routes: Routes = [
  {
    path: '',
    component: PruebaUnoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PruebaUnoRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent } from './angular.component';

const routes: Routes = [
  {
    path: '',
    component: AngularComponent,
    children: [
      {
        path: 'forms',
        loadChildren: () => import('./containers/formularios/formularios.module').then(m => m.FormulariosModule)
      },
      {
        path: 'prueba-uno',
        loadChildren: () => import('./containers/prueba-uno/prueba-uno.module').then(m => m.PruebaUnoModule)
      },
      {
        path: 'prueba-dos',
        loadChildren: () => import('./containers/reactive-form-1/reactive-form-1.module').then(m => m.ReactiveForm1Module)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }

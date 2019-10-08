import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // por defecto, va a formularios
    redirectTo: '/forms',
    pathMatch: 'full'
  },
  {
    // hacer el routing con lazy loading, importo el modulo que contiene todo lo referente al componente de forms
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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

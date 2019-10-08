import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // por defecto, va a formularios
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    // hacer el routing con lazy loading, importo el modulo que contiene todo lo referente al componente de forms
    path: 'home',
    loadChildren: () => import('./containers/home/home.module').then(m => m.HomeModule)
  },
  {
    // hacer el routing con lazy loading, importo el modulo que contiene todo lo referente al componente de forms
    path: 'angular',
    loadChildren: () => import('./containers/angular/angular.module').then(m => m.AngularModule)
  },
  {
    // hacer el routing con lazy loading, importo el modulo que contiene todo lo referente al componente de forms
    path: 'html',
    loadChildren: () => import('./containers/html/html.module').then(m => m.HtmlModule)
  },
  {
    // hacer el routing con lazy loading, importo el modulo que contiene todo lo referente al componente de forms
    path: 'css',
    loadChildren: () => import('./containers/css/css.module').then(m => m.CssModule)
  },
  {
    // hacer el routing con lazy loading, importo el modulo que contiene todo lo referente al componente de forms
    path: 'js',
    loadChildren: () => import('./containers/js/js.module').then(m => m.JsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

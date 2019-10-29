import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // por defecto, va a formularios
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    // hacer el routing con lazy loading, importo el modulo que contiene todo lo referente al componente de home
    path: 'home',
    loadChildren: () => import('./containers/home/home.module').then(m => m.HomeModule)
  },
  {
    // hacer el routing con lazy loading, importo el modulo que contiene todo lo referente al componente de angular
    path: 'angular',
    loadChildren: () => import('./containers/angular/angular.module').then(m => m.AngularModule)
  },
  {
    // hacer el routing con lazy loading, importo el modulo que contiene todo lo referente al componente de html
    path: 'html',
    loadChildren: () => import('./containers/html/html.module').then(m => m.HtmlModule)
  },
  {
    // hacer el routing con lazy loading, importo el modulo que contiene todo lo referente al componente de css
    path: 'css',
    loadChildren: () => import('./containers/css/css.module').then(m => m.CssModule)
  },
  {
    // hacer el routing con lazy loading, importo el modulo que contiene todo lo referente al componente de js
    path: 'js',
    loadChildren: () => import('./containers/js/js.module').then(m => m.JsModule)
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
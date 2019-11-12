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
    path: 'angular-landing',
    loadChildren: () => import('./containers/angular-landing/angular-landing.module').then(m => m.AngularLandingModule)
  },
  {
    // hacer el routing con lazy loading, importo el modulo que contiene todo lo referente al componente de html
    path: 'html-landing',
    loadChildren: () => import('./containers/html-landing/html-landing.module').then(m => m.HtmlLandingModule)
  },
  {
    // hacer el routing con lazy loading, importo el modulo que contiene todo lo referente al componente de css
    path: 'css-landing',
    loadChildren: () => import('./containers/css-landing/css-landing.module').then(m => m.CssLandingModule)
  },
  {
    // hacer el routing con lazy loading, importo el modulo que contiene todo lo referente al componente de js
    path: 'js-landing',
    loadChildren: () => import('./containers/js-landing/js-landing.module').then(m => m.JsLandingModule)
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

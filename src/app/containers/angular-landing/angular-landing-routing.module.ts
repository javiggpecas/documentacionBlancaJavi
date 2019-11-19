import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularLandingComponent } from './angular-landing.component';

const routes: Routes = [
  {
    path: '',
    component: AngularLandingComponent,
    children: [
      {
        path: 'form-components',
        loadChildren: () => import('./containers/form-components/form-components.module').then(m => m.FormComponentsModule)
      },
      {
        path: 'form',
        loadChildren: () => import('./containers/form/form.module').then(m => m.FormModule)
      },
      {
        path: 'others',
        loadChildren: () => import('./containers/others/others.module').then(m => m.OthersModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularLandingRoutingModule { }

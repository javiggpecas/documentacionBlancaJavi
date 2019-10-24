import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent } from './angular.component';

const routes: Routes = [
  {
    path: '',
    component: AngularComponent,
    children: [
      {
        path: 'form-components',
        loadChildren: () => import('./containers/form-components/form-components.module').then(m => m.FormComponentsModule)
      },
      {
        path: 'form',
        loadChildren: () => import('./containers/form/form.module').then(m => m.FormsModule)
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
export class AngularRoutingModule { }

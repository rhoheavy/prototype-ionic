import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'start',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/start/start.module').then(m => m.StartPageModule)
          }
        ]
      },
      {
        path: 'services',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/services/services.module').then(m => m.ServicesPageModule)
          }
        ]
      },
      {
        path: 'payment',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/payment/payment.module').then(m => m.PaymentPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/start',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/start',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

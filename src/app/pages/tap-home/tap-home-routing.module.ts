import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TapHomePage } from './tap-home.page';

const routes: Routes = [
  {
    path: '',
    component: TapHomePage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },

      {
        // path: 'reservas',
        // loadChildren: () => import().then(m => m.ReservasPageModule)
      },
      {
        // path: 'explora',
        // loadChildren: () => import().then(m => m.ExploraPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },


      {
        path: '',
        redirectTo: '/tap-home/home',
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: '/tap-home/reservas',
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: '/tap-home/explora',
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: '/tap-home/perfil',
        pathMatch: 'full'
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TapHomePageRoutingModule {}

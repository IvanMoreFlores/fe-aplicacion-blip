import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabHomePage } from './tab-home.page';


const routes: Routes = [
  {
    path: '',
    component: TabHomePage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },

      {
         path: 'nuevo-anu-pone-alq',
         loadChildren: () => import('../nuevo-anu-pone-alq/nuevo-anu-pone-alq.module').then(m => m.NuevoAnuPoneAlqPageModule)
      },
      // {
      //   path: 'explora',
      //   loadChildren: () => import('../explora/explora.module').then(m => m.ExploraPageModule)
      // },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },


      {
        path: '',
        redirectTo: '/tab-home/home',
        pathMatch: 'full'
      },
      // {
      //   path: '',
      //   redirectTo: '/tab-home/reservas',
      //   pathMatch: 'full'
      // },
      // {
      //   path: '',
      //   redirectTo: '/tab-home/explora',
      //   pathMatch: 'full'
      // },
      {
        path: '',
        redirectTo: '/tab-home/perfil',
        pathMatch: 'full'
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabHomePageRoutingModule {}


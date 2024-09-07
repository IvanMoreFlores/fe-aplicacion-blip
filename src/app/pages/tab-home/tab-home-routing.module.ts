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
         path: 'loader-comp',
         loadChildren: () => import('../loader-comp/loader-comp.module').then(m => m.LoaderCompPageModule)
      },
      // {
      //   path: 'explora',
      //   loadChildren: () => import('../explora/explora.module').then(m => m.ExploraPageModule)
      // },
      {
        path: 'inf-perso',
        loadChildren: () => import('../inf-perso/inf-perso.module').then(m => m.InfPersoPageModule)
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
        redirectTo: '/tab-home/inf-perso',
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


import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ante-penal',
    pathMatch: 'full'
  },
  {
    path: 'img-mostrar',
    loadChildren: () => import('./pages/img-mostrar/img-mostrar.module').then( m => m.ImgMostrarPageModule)
  },
  {
    path: 'confirmacion-de-identidad',
    loadChildren: () => import('./pages/confirmacion-de-identidad/confirmacion-de-identidad.module').then( m => m.ConfirmacionDeIdentidadPageModule)
  },
  {
    path: 'adj-dt-dni',
    loadChildren: () => import('./pages/adj-dt-dni/adj-dt-dni.module').then( m => m.AdjDtDniPageModule)
  },
  {
    path: 'ante-penal',
    loadChildren: () => import('./pages/ante-penal/ante-penal.module').then( m => m.AntePenalPageModule)
  },
  {
    path: 'eli-pref',
    loadChildren: () => import('./pages/eli-pref/eli-pref.module').then( m => m.EliPrefPageModule)
  },

  {
    path: 'img-esta',
    loadChildren: () => import('./pages/img-esta/img-esta.module').then( m => m.ImgEstaPageModule)
  },
  



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

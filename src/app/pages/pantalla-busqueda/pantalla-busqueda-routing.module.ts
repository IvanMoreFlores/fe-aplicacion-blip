import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PantallaBusquedaPage } from './pantalla-busqueda.page';

const routes: Routes = [
  {
    path: '',
    component: PantallaBusquedaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PantallaBusquedaPageRoutingModule {}

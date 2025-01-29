import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescripcionDeUbicacionPage } from './descripcion-de-ubicacion.page';

const routes: Routes = [
  {
    path: '',
    component: DescripcionDeUbicacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripcionDeUbicacionPageRoutingModule {}

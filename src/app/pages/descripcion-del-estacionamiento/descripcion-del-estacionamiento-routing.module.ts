import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescripcionDelEstacionamientoPage } from './descripcion-del-estacionamiento.page';

const routes: Routes = [
  {
    path: '',
    component: DescripcionDelEstacionamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripcionDelEstacionamientoPageRoutingModule {}

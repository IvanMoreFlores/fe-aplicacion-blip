import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescripcionDeServiciosAdicionalesPage } from './descripcion-de-servicios-adicionales.page';

const routes: Routes = [
  {
    path: '',
    component: DescripcionDeServiciosAdicionalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripcionDeServiciosAdicionalesPageRoutingModule {}

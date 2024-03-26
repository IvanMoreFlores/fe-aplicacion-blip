import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescripcionDeDireccionPage } from './descripcion-de-direccion.page';

const routes: Routes = [
  {
    path: '',
    component: DescripcionDeDireccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripcionDeDireccionPageRoutingModule {}

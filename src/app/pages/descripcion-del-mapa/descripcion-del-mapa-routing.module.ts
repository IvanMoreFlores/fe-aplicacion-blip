import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescripcionDelMapaPage } from './descripcion-del-mapa.page';

const routes: Routes = [
  {
    path: '',
    component: DescripcionDelMapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripcionDelMapaPageRoutingModule {}

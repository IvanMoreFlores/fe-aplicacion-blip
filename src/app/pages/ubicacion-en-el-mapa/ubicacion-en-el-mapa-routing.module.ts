import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UbicacionEnElMapaPage } from './ubicacion-en-el-mapa.page';

const routes: Routes = [
  {
    path: '',
    component: UbicacionEnElMapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UbicacionEnElMapaPageRoutingModule {}

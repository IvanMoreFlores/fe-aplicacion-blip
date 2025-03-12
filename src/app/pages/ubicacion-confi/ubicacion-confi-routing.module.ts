import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UbicacionConfiPage } from './ubicacion-confi.page';

const routes: Routes = [
  {
    path: '',
    component: UbicacionConfiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UbicacionConfiPageRoutingModule {}

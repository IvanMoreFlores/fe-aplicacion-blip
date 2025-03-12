import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgreNuevoVehiculoPage } from './agre-nuevo-vehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: AgreNuevoVehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgreNuevoVehiculoPageRoutingModule {}

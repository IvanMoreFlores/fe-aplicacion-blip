import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresentacionInfraccionesInformacionPage } from './presentacion-infracciones-informacion.page';

const routes: Routes = [
  {
    path: '',
    component: PresentacionInfraccionesInformacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresentacionInfraccionesInformacionPageRoutingModule {}

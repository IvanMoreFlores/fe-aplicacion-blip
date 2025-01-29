import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosVerificacionPage } from './datos-verificacion.page';

const routes: Routes = [
  {
    path: '',
    component: DatosVerificacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosVerificacionPageRoutingModule {}

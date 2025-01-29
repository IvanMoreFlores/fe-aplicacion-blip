import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmacionDeIdentidadPage } from './confirmacion-de-identidad.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmacionDeIdentidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmacionDeIdentidadPageRoutingModule {}

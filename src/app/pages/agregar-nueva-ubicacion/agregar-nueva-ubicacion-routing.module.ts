import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarNuevaUbicacionPage } from './agregar-nueva-ubicacion.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarNuevaUbicacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarNuevaUbicacionPageRoutingModule {}

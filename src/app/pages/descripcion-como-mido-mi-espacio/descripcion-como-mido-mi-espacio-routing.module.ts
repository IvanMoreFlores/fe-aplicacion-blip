import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescripcionComoMidoMiEspacioPage } from './descripcion-como-mido-mi-espacio.page';

const routes: Routes = [
  {
    path: '',
    component: DescripcionComoMidoMiEspacioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripcionComoMidoMiEspacioPageRoutingModule {}

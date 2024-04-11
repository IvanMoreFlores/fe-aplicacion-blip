import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajesDestacadosPage } from './mensajes-destacados.page';

const routes: Routes = [
  {
    path: '',
    component: MensajesDestacadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesDestacadosPageRoutingModule {}

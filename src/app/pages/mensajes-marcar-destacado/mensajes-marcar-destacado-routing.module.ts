import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajesMarcarDestacadoPage } from './mensajes-marcar-destacado.page';

const routes: Routes = [
  {
    path: '',
    component: MensajesMarcarDestacadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesMarcarDestacadoPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajesRespuestasPage } from './mensajes-respuestas.page';

const routes: Routes = [
  {
    path: '',
    component: MensajesRespuestasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesRespuestasPageRoutingModule {}

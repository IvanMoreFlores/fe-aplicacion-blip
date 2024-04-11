import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajesAtencionPage } from './mensajes-atencion.page';

const routes: Routes = [
  {
    path: '',
    component: MensajesAtencionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesAtencionPageRoutingModule {}

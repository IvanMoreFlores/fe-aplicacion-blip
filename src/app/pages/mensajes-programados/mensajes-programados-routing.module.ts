import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajesProgramadosPage } from './mensajes-programados.page';

const routes: Routes = [
  {
    path: '',
    component: MensajesProgramadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesProgramadosPageRoutingModule {}

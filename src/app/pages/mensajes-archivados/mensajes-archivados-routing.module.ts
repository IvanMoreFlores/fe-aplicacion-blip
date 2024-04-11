import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajesArchivadosPage } from './mensajes-archivados.page';

const routes: Routes = [
  {
    path: '',
    component: MensajesArchivadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesArchivadosPageRoutingModule {}

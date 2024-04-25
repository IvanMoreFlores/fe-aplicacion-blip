import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajesArchivadosDesarchivarPage } from './mensajes-archivados-desarchivar.page';

const routes: Routes = [
  {
    path: '',
    component: MensajesArchivadosDesarchivarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesArchivadosDesarchivarPageRoutingModule {}

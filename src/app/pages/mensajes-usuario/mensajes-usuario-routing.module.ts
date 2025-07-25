import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajesUsuarioPage } from './mensajes-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: MensajesUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesUsuarioPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajesMarcarNoLeidoPage } from './mensajes-marcar-no-leido.page';

const routes: Routes = [
  {
    path: '',
    component: MensajesMarcarNoLeidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesMarcarNoLeidoPageRoutingModule {}

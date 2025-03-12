import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificacionesConfiPage } from './notificaciones-confi.page';

const routes: Routes = [
  {
    path: '',
    component: NotificacionesConfiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificacionesConfiPageRoutingModule {}

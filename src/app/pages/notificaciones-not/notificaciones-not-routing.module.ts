import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificacionesNotPage } from './notificaciones-not.page';

const routes: Routes = [
  {
    path: '',
    component: NotificacionesNotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificacionesNotPageRoutingModule {}

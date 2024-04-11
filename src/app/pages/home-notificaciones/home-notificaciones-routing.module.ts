import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeNotificacionesPage } from './home-notificaciones.page';

const routes: Routes = [
  {
    path: '',
    component: HomeNotificacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeNotificacionesPageRoutingModule {}

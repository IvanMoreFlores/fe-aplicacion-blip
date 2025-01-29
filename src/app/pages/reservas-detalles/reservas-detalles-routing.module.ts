import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservasDetallesPage } from './reservas-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: ReservasDetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservasDetallesPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservasDetallesReciboPage } from './reservas-detalles-recibo.page';

const routes: Routes = [
  {
    path: '',
    component: ReservasDetallesReciboPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservasDetallesReciboPageRoutingModule {}

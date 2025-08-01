import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionPagoPage } from './configuracion-pago.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionPagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionPagoPageRoutingModule {}

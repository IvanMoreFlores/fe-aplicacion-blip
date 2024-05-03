import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorarioPersonalizadoPage } from './horario-personalizado.page';

const routes: Routes = [
  {
    path: '',
    component: HorarioPersonalizadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorarioPersonalizadoPageRoutingModule {}

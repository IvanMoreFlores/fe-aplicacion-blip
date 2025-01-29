import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioSeguridadPage } from './inicio-seguridad.page';

const routes: Routes = [
  {
    path: '',
    component: InicioSeguridadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioSeguridadPageRoutingModule {}

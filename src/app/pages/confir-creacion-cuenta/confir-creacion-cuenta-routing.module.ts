import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirCreacionCuentaPage } from './confir-creacion-cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirCreacionCuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirCreacionCuentaPageRoutingModule {}

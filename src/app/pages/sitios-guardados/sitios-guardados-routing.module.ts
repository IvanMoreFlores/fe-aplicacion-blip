import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SitiosGuardadosPage } from './sitios-guardados.page';

const routes: Routes = [
  {
    path: '',
    component: SitiosGuardadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SitiosGuardadosPageRoutingModule {}

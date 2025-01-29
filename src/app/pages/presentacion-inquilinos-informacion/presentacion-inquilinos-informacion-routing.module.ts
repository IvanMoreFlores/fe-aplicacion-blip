import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresentacionInquilinosInformacionPage } from './presentacion-inquilinos-informacion.page';

const routes: Routes = [
  {
    path: '',
    component: PresentacionInquilinosInformacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresentacionInquilinosInformacionPageRoutingModule {}

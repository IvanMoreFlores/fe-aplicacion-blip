import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosNumeroPage } from './datos-numero.page';

const routes: Routes = [
  {
    path: '',
    component: DatosNumeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosNumeroPageRoutingModule {}

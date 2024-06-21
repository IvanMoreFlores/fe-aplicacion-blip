import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosIngresarPage } from './datos-ingresar.page';

const routes: Routes = [
  {
    path: '',
    component: DatosIngresarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosIngresarPageRoutingModule {}

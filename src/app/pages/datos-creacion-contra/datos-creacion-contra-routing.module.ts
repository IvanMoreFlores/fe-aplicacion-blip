import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosCreacionContraPage } from './datos-creacion-contra.page';

const routes: Routes = [
  {
    path: '',
    component: DatosCreacionContraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosCreacionContraPageRoutingModule {}

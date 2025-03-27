import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescripcionEspacioPage } from './descripcion-espacio.page';

const routes: Routes = [
  {
    path: '',
    component: DescripcionEspacioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripcionEspacioPageRoutingModule {}

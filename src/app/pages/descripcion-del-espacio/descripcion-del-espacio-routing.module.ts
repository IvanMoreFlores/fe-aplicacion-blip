import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescripcionDelEspacioPage } from './descripcion-del-espacio.page';

const routes: Routes = [
  {
    path: '',
    component: DescripcionDelEspacioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripcionDelEspacioPageRoutingModule {}

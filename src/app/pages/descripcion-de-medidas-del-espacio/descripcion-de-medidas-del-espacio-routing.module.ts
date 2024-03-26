import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescripcionDeMedidasDelEspacioPage } from './descripcion-de-medidas-del-espacio.page';

const routes: Routes = [
  {
    path: '',
    component: DescripcionDeMedidasDelEspacioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripcionDeMedidasDelEspacioPageRoutingModule {}

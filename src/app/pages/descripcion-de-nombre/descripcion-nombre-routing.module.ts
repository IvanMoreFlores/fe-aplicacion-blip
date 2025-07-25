import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DescripcionNombrePage } from './descripcion-nombre.page';

const routes: Routes = [
  {
    path: '',
    component: DescripcionNombrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripcionNombrePageRoutingModule {}

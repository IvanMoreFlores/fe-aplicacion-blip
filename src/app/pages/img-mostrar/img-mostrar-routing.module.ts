import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImgMostrarPage } from './img-mostrar.page';

const routes: Routes = [
  {
    path: '',
    component: ImgMostrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImgMostrarPageRoutingModule {}

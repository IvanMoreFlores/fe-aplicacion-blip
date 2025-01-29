import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImgEstaPage } from './img-esta.page';

const routes: Routes = [
  {
    path: '',
    component: ImgEstaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImgEstaPageRoutingModule {}

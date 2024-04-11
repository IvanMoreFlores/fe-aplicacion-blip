import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImgMAntePenPage } from './img-m-ante-pen.page';

const routes: Routes = [
  {
    path: '',
    component: ImgMAntePenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImgMAntePenPageRoutingModule {}

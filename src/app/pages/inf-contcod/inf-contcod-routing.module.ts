import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfContcodPage } from './inf-contcod.page';

const routes: Routes = [
  {
    path: '',
    component: InfContcodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfContcodPageRoutingModule {}

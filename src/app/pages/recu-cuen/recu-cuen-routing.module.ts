import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuCuenPage } from './recu-cuen.page';

const routes: Routes = [
  {
    path: '',
    component: RecuCuenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuCuenPageRoutingModule {}

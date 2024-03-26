import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedaccionPage } from './redaccion.page';

const routes: Routes = [
  {
    path: '',
    component: RedaccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedaccionPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccesCorrPage } from './succes-corr.page';

const routes: Routes = [
  {
    path: '',
    component: SuccesCorrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccesCorrPageRoutingModule {}

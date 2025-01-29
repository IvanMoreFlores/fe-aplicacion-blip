import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccesRestconPage } from './succes-restcon.page';

const routes: Routes = [
  {
    path: '',
    component: SuccesRestconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccesRestconPageRoutingModule {}

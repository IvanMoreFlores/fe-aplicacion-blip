import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccesCorPage } from './succes-cor.page';

const routes: Routes = [
  {
    path: '',
    component: SuccesCorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccesCorPageRoutingModule {}

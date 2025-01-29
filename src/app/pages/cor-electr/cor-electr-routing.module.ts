import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorElectrPage } from './cor-electr.page';

const routes: Routes = [
  {
    path: '',
    component: CorElectrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorElectrPageRoutingModule {}

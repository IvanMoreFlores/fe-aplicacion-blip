import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfContsucesPage } from './inf-contsuces.page';

const routes: Routes = [
  {
    path: '',
    component: InfContsucesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfContsucesPageRoutingModule {}

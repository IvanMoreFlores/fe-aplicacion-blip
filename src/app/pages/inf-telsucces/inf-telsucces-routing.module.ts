import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfTelsuccesPage } from './inf-telsucces.page';

const routes: Routes = [
  {
    path: '',
    component: InfTelsuccesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfTelsuccesPageRoutingModule {}

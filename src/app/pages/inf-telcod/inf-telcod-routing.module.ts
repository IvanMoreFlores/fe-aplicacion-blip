import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfTelcodPage } from './inf-telcod.page';

const routes: Routes = [
  {
    path: '',
    component: InfTelcodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfTelcodPageRoutingModule {}

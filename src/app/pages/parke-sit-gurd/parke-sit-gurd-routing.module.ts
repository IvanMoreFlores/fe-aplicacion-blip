import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkeSitGurdPage } from './parke-sit-gurd.page';

const routes: Routes = [
  {
    path: '',
    component: ParkeSitGurdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkeSitGurdPageRoutingModule {}

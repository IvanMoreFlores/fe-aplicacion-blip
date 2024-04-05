import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoAnuPoneAlqPage } from './nuevo-anu-pone-alq.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoAnuPoneAlqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoAnuPoneAlqPageRoutingModule {}

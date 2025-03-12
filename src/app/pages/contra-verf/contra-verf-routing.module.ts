import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContraVerfPage } from './contra-verf.page';

const routes: Routes = [
  {
    path: '',
    component: ContraVerfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContraVerfPageRoutingModule {}

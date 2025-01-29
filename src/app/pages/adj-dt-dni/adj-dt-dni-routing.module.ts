import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdjDtDniPage } from './adj-dt-dni.page';

const routes: Routes = [
  {
    path: '',
    component: AdjDtDniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdjDtDniPageRoutingModule {}

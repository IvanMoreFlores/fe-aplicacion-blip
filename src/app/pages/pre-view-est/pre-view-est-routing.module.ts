import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreViewEstPage } from './pre-view-est.page';

const routes: Routes = [
  {
    path: '',
    component: PreViewEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreViewEstPageRoutingModule {}

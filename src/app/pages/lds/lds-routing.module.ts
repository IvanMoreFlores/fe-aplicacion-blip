import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LdsPage } from './lds.page';

const routes: Routes = [
  {
    path: '',
    component: LdsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LdsPageRoutingModule {}

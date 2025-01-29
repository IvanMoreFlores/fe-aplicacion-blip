import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruPage } from './pru.page';

const routes: Routes = [
  {
    path: '',
    component: PruPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruPageRoutingModule {}

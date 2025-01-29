import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorControlvPage } from './cor-controlv.page';

const routes: Routes = [
  {
    path: '',
    component: CorControlvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorControlvPageRoutingModule {}

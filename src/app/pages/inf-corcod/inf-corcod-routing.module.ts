import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfCorcodPage } from './inf-corcod.page';

const routes: Routes = [
  {
    path: '',
    component: InfCorcodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfCorcodPageRoutingModule {}

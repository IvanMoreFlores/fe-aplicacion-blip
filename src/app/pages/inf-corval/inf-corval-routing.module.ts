import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfCorvalPage } from './inf-corval.page';

const routes: Routes = [
  {
    path: '',
    component: InfCorvalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfCorvalPageRoutingModule {}

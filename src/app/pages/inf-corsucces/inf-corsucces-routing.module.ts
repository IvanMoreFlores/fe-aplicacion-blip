import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfCorsuccesPage } from './inf-corsucces.page';

const routes: Routes = [
  {
    path: '',
    component: InfCorsuccesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfCorsuccesPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfContrestPage } from './inf-contrest.page';

const routes: Routes = [
  {
    path: '',
    component: InfContrestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfContrestPageRoutingModule {}

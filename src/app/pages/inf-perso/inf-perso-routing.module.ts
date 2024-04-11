import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfPersoPage } from './inf-perso.page';

const routes: Routes = [
  {
    path: '',
    component: InfPersoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfPersoPageRoutingModule {}

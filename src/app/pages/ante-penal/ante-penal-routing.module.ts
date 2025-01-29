import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntePenalPage } from './ante-penal.page';

const routes: Routes = [
  {
    path: '',
    component: AntePenalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntePenalPageRoutingModule {}

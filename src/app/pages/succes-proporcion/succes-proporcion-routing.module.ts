import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccesProporcionPage } from './succes-proporcion.page';

const routes: Routes = [
  {
    path: '',
    component: SuccesProporcionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccesProporcionPageRoutingModule {}

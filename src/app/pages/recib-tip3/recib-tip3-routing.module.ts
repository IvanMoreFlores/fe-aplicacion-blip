import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecibTip3Page } from './recib-tip3.page';

const routes: Routes = [
  {
    path: '',
    component: RecibTip3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecibTip3PageRoutingModule {}

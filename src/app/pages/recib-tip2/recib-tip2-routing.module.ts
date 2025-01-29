import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecibTip2Page } from './recib-tip2.page';

const routes: Routes = [
  {
    path: '',
    component: RecibTip2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecibTip2PageRoutingModule {}

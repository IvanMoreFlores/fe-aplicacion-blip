import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccesReportPage } from './succes-report.page';

const routes: Routes = [
  {
    path: '',
    component: SuccesReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccesReportPageRoutingModule {}

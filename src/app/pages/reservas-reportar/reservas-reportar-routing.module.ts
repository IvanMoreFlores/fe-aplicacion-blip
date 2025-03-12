import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservasReportarPage } from './reservas-reportar.page';

const routes: Routes = [
  {
    path: '',
    component: ReservasReportarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservasReportarPageRoutingModule {}

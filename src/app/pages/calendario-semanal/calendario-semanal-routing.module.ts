import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioSemanalPage } from './calendario-semanal.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarioSemanalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioSemanalPageRoutingModule {}

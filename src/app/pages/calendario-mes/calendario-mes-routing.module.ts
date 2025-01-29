import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioMesPage } from './calendario-mes.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarioMesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioMesPageRoutingModule {}

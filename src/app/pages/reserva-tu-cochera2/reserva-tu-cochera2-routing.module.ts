import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservaTuCochera2Page } from './reserva-tu-cochera2.page';

const routes: Routes = [
  {
    path: '',
    component: ReservaTuCochera2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservaTuCochera2PageRoutingModule {}

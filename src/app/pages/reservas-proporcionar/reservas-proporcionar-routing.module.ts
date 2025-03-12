import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservasProporcionarPage } from './reservas-proporcionar.page';

const routes: Routes = [
  {
    path: '',
    component: ReservasProporcionarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservasProporcionarPageRoutingModule {}

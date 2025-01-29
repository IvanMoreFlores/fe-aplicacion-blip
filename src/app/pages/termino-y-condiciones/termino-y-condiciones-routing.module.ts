import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerminoYCondicionesPage } from './termino-y-condiciones.page';

const routes: Routes = [
  {
    path: '',
    component: TerminoYCondicionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerminoYCondicionesPageRoutingModule {}

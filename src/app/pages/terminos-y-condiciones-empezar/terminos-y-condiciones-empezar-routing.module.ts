import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerminosYCondicionesEmpezarPage } from './terminos-y-condiciones-empezar.page';

const routes: Routes = [
  {
    path: '',
    component: TerminosYCondicionesEmpezarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerminosYCondicionesEmpezarPageRoutingModule {}

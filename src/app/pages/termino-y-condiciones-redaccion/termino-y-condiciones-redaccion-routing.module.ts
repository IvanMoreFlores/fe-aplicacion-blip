import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerminoYCondicionesRedaccionPage } from './termino-y-condiciones-redaccion.page';

const routes: Routes = [
  {
    path: '',
    component: TerminoYCondicionesRedaccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerminoYCondicionesRedaccionPageRoutingModule {}

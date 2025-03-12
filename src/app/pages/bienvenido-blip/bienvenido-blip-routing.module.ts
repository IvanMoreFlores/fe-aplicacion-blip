import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienvenidoBlipPage } from './bienvenido-blip.page';

const routes: Routes = [
  {
    path: '',
    component: BienvenidoBlipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BienvenidoBlipPageRoutingModule {}

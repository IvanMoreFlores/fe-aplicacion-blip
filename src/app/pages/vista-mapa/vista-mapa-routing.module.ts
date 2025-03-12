import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaMapaPage } from './vista-mapa.page';

const routes: Routes = [
  {
    path: '',
    component: VistaMapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaMapaPageRoutingModule {}

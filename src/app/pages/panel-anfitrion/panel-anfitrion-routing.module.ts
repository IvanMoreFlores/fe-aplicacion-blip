import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelAnfitrionPage } from './panel-anfitrion.page';

const routes: Routes = [
  {
    path: '',
    component: PanelAnfitrionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelAnfitrionPageRoutingModule {}

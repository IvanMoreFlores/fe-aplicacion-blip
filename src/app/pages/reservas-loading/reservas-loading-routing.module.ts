import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservasLoadingPage } from './reservas-loading.page';

const routes: Routes = [
  {
    path: '',
    component: ReservasLoadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservasLoadingPageRoutingModule {}

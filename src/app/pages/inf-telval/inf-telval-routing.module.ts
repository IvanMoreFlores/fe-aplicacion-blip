import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfTelvalPage } from './inf-telval.page';

const routes: Routes = [
  {
    path: '',
    component: InfTelvalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfTelvalPageRoutingModule {}

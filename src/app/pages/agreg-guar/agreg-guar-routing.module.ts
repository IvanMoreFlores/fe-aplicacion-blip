import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregGuarPage } from './agreg-guar.page';

const routes: Routes = [
  {
    path: '',
    component: AgregGuarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregGuarPageRoutingModule {}

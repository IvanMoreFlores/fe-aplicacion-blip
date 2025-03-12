import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnboarPage } from './onboar.page';

const routes: Routes = [
  {
    path: '',
    component: OnboarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboarPageRoutingModule {}

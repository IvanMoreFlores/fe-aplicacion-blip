import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccetHomePage } from './succet-home.page';

const routes: Routes = [
  {
    path: '',
    component: SuccetHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccetHomePageRoutingModule {}

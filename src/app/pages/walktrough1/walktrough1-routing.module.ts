import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Walktrough1Page } from './walktrough1.page';

const routes: Routes = [
  {
    path: '',
    component: Walktrough1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Walktrough1PageRoutingModule {}

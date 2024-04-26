import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Soporte56Page } from './soporte56.page';

const routes: Routes = [
  {
    path: '',
    component: Soporte56Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Soporte56PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PressedPage } from './pressed.page';

const routes: Routes = [
  {
    path: '',
    component: PressedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PressedPageRoutingModule {}

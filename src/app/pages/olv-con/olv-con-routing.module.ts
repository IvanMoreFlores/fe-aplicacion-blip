import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvConPage } from './olv-con.page';

const routes: Routes = [
  {
    path: '',
    component: OlvConPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvConPageRoutingModule {}

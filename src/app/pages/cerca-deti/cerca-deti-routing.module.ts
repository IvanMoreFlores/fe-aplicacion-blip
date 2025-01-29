import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CercaDetiPage } from './cerca-deti.page';

const routes: Routes = [
  {
    path: '',
    component: CercaDetiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CercaDetiPageRoutingModule {}

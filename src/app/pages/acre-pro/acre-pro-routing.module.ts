import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcreProPage } from './acre-pro.page';

const routes: Routes = [
  {
    path: '',
    component: AcreProPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcreProPageRoutingModule {}

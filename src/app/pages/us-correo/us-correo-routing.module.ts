import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsCorreoPage } from './us-correo.page';

const routes: Routes = [
  {
    path: '',
    component: UsCorreoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsCorreoPageRoutingModule {}

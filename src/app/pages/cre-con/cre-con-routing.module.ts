import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreConPage } from './cre-con.page';

const routes: Routes = [
  {
    path: '',
    component: CreConPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreConPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotifiPage } from './notifi.page';

const routes: Routes = [
  {
    path: '',
    component: NotifiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotifiPageRoutingModule {}

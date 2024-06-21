import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogConPage } from './log-con.page';

const routes: Routes = [
  {
    path: '',
    component: LogConPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogConPageRoutingModule {}

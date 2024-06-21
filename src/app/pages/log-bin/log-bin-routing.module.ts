import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogBinPage } from './log-bin.page';

const routes: Routes = [
  {
    path: '',
    component: LogBinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogBinPageRoutingModule {}

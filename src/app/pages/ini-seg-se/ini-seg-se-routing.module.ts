import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniSegSePage } from './ini-seg-se.page';

const routes: Routes = [
  {
    path: '',
    component: IniSegSePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniSegSePageRoutingModule {}

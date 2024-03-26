import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliPrefPage } from './eli-pref.page';

const routes: Routes = [
  {
    path: '',
    component: EliPrefPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliPrefPageRoutingModule {}

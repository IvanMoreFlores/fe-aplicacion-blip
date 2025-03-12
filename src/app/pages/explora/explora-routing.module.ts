import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploraPage } from './explora.page';

const routes: Routes = [
  {
    path: '',
    component: ExploraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploraPageRoutingModule {}

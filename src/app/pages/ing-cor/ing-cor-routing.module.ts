import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngCorPage } from './ing-cor.page';

const routes: Routes = [
  {
    path: '',
    component: IngCorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngCorPageRoutingModule {}

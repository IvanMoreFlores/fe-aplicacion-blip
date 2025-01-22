import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContraCorPage } from './contra-cor.page';

const routes: Routes = [
  {
    path: '',
    component: ContraCorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContraCorPageRoutingModule {}

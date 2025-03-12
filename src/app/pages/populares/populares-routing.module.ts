import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopularesPage } from './populares.page';

const routes: Routes = [
  {
    path: '',
    component: PopularesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopularesPageRoutingModule {}

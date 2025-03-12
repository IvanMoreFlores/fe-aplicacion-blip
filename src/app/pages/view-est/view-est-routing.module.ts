import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewEstPage } from './view-est.page';

const routes: Routes = [
  {
    path: '',
    component: ViewEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewEstPageRoutingModule {}

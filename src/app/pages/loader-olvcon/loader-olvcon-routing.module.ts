import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoaderOlvconPage } from './loader-olvcon.page';

const routes: Routes = [
  {
    path: '',
    component: LoaderOlvconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoaderOlvconPageRoutingModule {}

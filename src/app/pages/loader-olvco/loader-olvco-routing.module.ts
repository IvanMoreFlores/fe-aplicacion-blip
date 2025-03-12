import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoaderOlvcoPage } from './loader-olvco.page';

const routes: Routes = [
  {
    path: '',
    component: LoaderOlvcoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoaderOlvcoPageRoutingModule {}

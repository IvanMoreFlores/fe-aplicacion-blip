import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoaderCompPage } from './loader-comp.page';

const routes: Routes = [
  {
    path: '',
    component: LoaderCompPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoaderCompPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorRegistroPage } from './cor-registro.page';

const routes: Routes = [
  {
    path: '',
    component: CorRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorRegistroPageRoutingModule {}

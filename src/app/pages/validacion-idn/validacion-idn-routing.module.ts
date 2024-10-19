import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidacionIdnPage } from './validacion-idn.page';

const routes: Routes = [
  {
    path: '',
    component: ValidacionIdnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidacionIdnPageRoutingModule {}

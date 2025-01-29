import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostraEstaPage } from './mostra-esta.page';

const routes: Routes = [
  {
    path: '',
    component: MostraEstaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostraEstaPageRoutingModule {}

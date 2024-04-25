import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancelacionPoliticaPage } from './cancelacion-politica.page';

const routes: Routes = [
  {
    path: '',
    component: CancelacionPoliticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancelacionPoliticaPageRoutingModule {}

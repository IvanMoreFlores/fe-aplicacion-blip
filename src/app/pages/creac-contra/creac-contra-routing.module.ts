import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreacContraPage } from './creac-contra.page';

const routes: Routes = [
  {
    path: '',
    component: CreacContraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreacContraPageRoutingModule {}

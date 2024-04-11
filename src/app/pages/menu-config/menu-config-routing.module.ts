import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MENUCONFIGPage } from './menu-config.page';

const routes: Routes = [
  {
    path: '',
    component: MENUCONFIGPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MENUCONFIGPageRoutingModule {}

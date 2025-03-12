import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlipHomePage } from './blip-home.page';

const routes: Routes = [
  {
    path: '',
    component: BlipHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlipHomePageRoutingModule {}

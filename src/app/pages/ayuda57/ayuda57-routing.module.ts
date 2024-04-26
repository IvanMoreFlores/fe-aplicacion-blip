import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ayuda57Page } from './ayuda57.page';

const routes: Routes = [
  {
    path: '',
    component: Ayuda57Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ayuda57PageRoutingModule {}

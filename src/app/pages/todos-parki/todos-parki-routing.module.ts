import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosParkiPage } from './todos-parki.page';

const routes: Routes = [
  {
    path: '',
    component: TodosParkiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosParkiPageRoutingModule {}

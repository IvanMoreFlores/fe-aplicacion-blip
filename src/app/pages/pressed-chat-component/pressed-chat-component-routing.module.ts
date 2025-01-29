import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PressedChatComponentPage } from './pressed-chat-component.page';

const routes: Routes = [
  {
    path: '',
    component: PressedChatComponentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PressedChatComponentPageRoutingModule {}

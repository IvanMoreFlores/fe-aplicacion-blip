import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PressedChatPage } from './pressed-chat.page';

const routes: Routes = [
  {
    path: '',
    component: PressedChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PressedChatPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PressedChatPageRoutingModule } from './pressed-chat-routing.module';

import { PressedChatPage } from './pressed-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PressedChatPageRoutingModule
  ],
  declarations: [PressedChatPage]
})
export class PressedChatPageModule {}

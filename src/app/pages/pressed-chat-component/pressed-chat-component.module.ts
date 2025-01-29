import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PressedChatComponentPageRoutingModule } from './pressed-chat-component-routing.module';

import { PressedChatComponentPage } from './pressed-chat-component.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PressedChatComponentPageRoutingModule
  ],
  declarations: [PressedChatComponentPage]
})
export class PressedChatComponentPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PressedPageRoutingModule } from './pressed-routing.module';

import { PressedPage } from './pressed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PressedPageRoutingModule
  ],
  declarations: [PressedPage]
})
export class PressedPageModule {}

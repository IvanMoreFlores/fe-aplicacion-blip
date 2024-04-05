import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MENUCONFIGPageRoutingModule } from './menu-config-routing.module';

import { MENUCONFIGPage } from './menu-config.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MENUCONFIGPageRoutingModule
  ],
  declarations: [MENUCONFIGPage]
})
export class MENUCONFIGPageModule {}

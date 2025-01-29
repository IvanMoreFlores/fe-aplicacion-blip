import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BienvenidoBlipPageRoutingModule } from './bienvenido-blip-routing.module';

import { BienvenidoBlipPage } from './bienvenido-blip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BienvenidoBlipPageRoutingModule
  ],
  declarations: [BienvenidoBlipPage]
})
export class BienvenidoBlipPageModule {}

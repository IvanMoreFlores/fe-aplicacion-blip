import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesMarcarLeidoPageRoutingModule } from './mensajes-marcar-leido-routing.module';

import { MensajesMarcarLeidoPage } from './mensajes-marcar-leido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesMarcarLeidoPageRoutingModule
  ],
  declarations: [MensajesMarcarLeidoPage]
})
export class MensajesMarcarLeidoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesMarcarNoLeidoPageRoutingModule } from './mensajes-marcar-no-leido-routing.module';

import { MensajesMarcarNoLeidoPage } from './mensajes-marcar-no-leido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesMarcarNoLeidoPageRoutingModule
  ],
  declarations: [MensajesMarcarNoLeidoPage]
})
export class MensajesMarcarNoLeidoPageModule {}

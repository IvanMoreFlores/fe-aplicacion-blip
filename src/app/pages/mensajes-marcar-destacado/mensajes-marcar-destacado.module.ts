import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesMarcarDestacadoPageRoutingModule } from './mensajes-marcar-destacado-routing.module';

import { MensajesMarcarDestacadoPage } from './mensajes-marcar-destacado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesMarcarDestacadoPageRoutingModule
  ],
  declarations: [MensajesMarcarDestacadoPage]
})
export class MensajesMarcarDestacadoPageModule {}

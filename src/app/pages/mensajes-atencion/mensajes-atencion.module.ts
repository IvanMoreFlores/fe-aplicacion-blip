import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesAtencionPageRoutingModule } from './mensajes-atencion-routing.module';

import { MensajesAtencionPage } from './mensajes-atencion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesAtencionPageRoutingModule
  ],
  declarations: [MensajesAtencionPage]
})
export class MensajesAtencionPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesRespuestasPageRoutingModule } from './mensajes-respuestas-routing.module';

import { MensajesRespuestasPage } from './mensajes-respuestas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesRespuestasPageRoutingModule
  ],
  declarations: [MensajesRespuestasPage]
})
export class MensajesRespuestasPageModule {}

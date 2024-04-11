import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesProgramadosPageRoutingModule } from './mensajes-programados-routing.module';

import { MensajesProgramadosPage } from './mensajes-programados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesProgramadosPageRoutingModule
  ],
  declarations: [MensajesProgramadosPage]
})
export class MensajesProgramadosPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesArchivadosPageRoutingModule } from './mensajes-archivados-routing.module';

import { MensajesArchivadosPage } from './mensajes-archivados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesArchivadosPageRoutingModule
  ],
  declarations: [MensajesArchivadosPage]
})
export class MensajesArchivadosPageModule {}

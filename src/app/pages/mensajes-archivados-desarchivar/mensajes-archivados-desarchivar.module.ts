import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesArchivadosDesarchivarPageRoutingModule } from './mensajes-archivados-desarchivar-routing.module';

import { MensajesArchivadosDesarchivarPage } from './mensajes-archivados-desarchivar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesArchivadosDesarchivarPageRoutingModule
  ],
  declarations: [MensajesArchivadosDesarchivarPage]
})
export class MensajesArchivadosDesarchivarPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesDestacadosPageRoutingModule } from './mensajes-destacados-routing.module';

import { MensajesDestacadosPage } from './mensajes-destacados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesDestacadosPageRoutingModule
  ],
  declarations: [MensajesDestacadosPage]
})
export class MensajesDestacadosPageModule {}

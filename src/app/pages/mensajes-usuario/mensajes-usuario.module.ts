import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesUsuarioPageRoutingModule } from './mensajes-usuario-routing.module';

import { MensajesUsuarioPage } from './mensajes-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesUsuarioPageRoutingModule
  ],
  declarations: [MensajesUsuarioPage]
})
export class MensajesUsuarioPageModule {}

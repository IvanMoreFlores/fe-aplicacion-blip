import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescripcionComoMidoMiEspacioPageRoutingModule } from './descripcion-como-mido-mi-espacio-routing.module';

import { DescripcionComoMidoMiEspacioPage } from './descripcion-como-mido-mi-espacio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionComoMidoMiEspacioPageRoutingModule
  ],
  declarations: [DescripcionComoMidoMiEspacioPage]
})
export class DescripcionComoMidoMiEspacioPageModule {}

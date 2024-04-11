import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnuncioCaracteristicasPageRoutingModule } from './anuncio-caracteristicas-routing.module';

import { AnuncioCaracteristicasPage } from './anuncio-caracteristicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnuncioCaracteristicasPageRoutingModule
  ],
  declarations: [AnuncioCaracteristicasPage]
})
export class AnuncioCaracteristicasPageModule {}

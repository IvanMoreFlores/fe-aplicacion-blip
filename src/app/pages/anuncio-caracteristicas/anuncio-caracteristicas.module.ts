import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { AnuncioCaracteristicasPageRoutingModule } from './anuncio-caracteristicas-routing.module';

import { AnuncioCaracteristicasPage } from './anuncio-caracteristicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnuncioCaracteristicasPageRoutingModule,
    NgxDropzoneModule
  ],
  declarations: [AnuncioCaracteristicasPage]
})
export class AnuncioCaracteristicasPageModule {}

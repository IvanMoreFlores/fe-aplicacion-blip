import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresentacionInfraccionesInformacionPageRoutingModule } from './presentacion-infracciones-informacion-routing.module';

import { PresentacionInfraccionesInformacionPage } from './presentacion-infracciones-informacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresentacionInfraccionesInformacionPageRoutingModule
  ],
  declarations: [PresentacionInfraccionesInformacionPage]
})
export class PresentacionInfraccionesInformacionPageModule {}

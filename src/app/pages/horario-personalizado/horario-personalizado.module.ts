import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorarioPersonalizadoPageRoutingModule } from './horario-personalizado-routing.module';

import { HorarioPersonalizadoPage } from './horario-personalizado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorarioPersonalizadoPageRoutingModule
  ],
  declarations: [HorarioPersonalizadoPage]
})
export class HorarioPersonalizadoPageModule {}

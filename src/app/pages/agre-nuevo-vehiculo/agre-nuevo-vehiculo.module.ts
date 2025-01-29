import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgreNuevoVehiculoPageRoutingModule } from './agre-nuevo-vehiculo-routing.module';

import { AgreNuevoVehiculoPage } from './agre-nuevo-vehiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgreNuevoVehiculoPageRoutingModule
  ],
  declarations: [AgreNuevoVehiculoPage]
})
export class AgreNuevoVehiculoPageModule {}

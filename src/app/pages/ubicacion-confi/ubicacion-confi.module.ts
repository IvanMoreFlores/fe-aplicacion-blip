import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UbicacionConfiPageRoutingModule } from './ubicacion-confi-routing.module';

import { UbicacionConfiPage } from './ubicacion-confi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbicacionConfiPageRoutingModule
  ],
  declarations: [UbicacionConfiPage]
})
export class UbicacionConfiPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescripcionDelEstacionamientoPageRoutingModule } from './descripcion-del-estacionamiento-routing.module';

import { DescripcionDelEstacionamientoPage } from './descripcion-del-estacionamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionDelEstacionamientoPageRoutingModule
  ],
  declarations: [DescripcionDelEstacionamientoPage]
})
export class DescripcionDelEstacionamientoPageModule {}

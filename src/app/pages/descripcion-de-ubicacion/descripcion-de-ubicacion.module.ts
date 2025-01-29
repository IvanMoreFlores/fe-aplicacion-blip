import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescripcionDeUbicacionPageRoutingModule } from './descripcion-de-ubicacion-routing.module';

import { DescripcionDeUbicacionPage } from './descripcion-de-ubicacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionDeUbicacionPageRoutingModule
  ],
  declarations: [DescripcionDeUbicacionPage]
})
export class DescripcionDeUbicacionPageModule {}

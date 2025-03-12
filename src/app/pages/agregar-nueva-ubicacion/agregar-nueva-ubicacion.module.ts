import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarNuevaUbicacionPageRoutingModule } from './agregar-nueva-ubicacion-routing.module';

import { AgregarNuevaUbicacionPage } from './agregar-nueva-ubicacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarNuevaUbicacionPageRoutingModule
  ],
  declarations: [AgregarNuevaUbicacionPage]
})
export class AgregarNuevaUbicacionPageModule {}

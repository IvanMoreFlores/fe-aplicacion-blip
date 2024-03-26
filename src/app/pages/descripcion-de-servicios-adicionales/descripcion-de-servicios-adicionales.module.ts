import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescripcionDeServiciosAdicionalesPageRoutingModule } from './descripcion-de-servicios-adicionales-routing.module';

import { DescripcionDeServiciosAdicionalesPage } from './descripcion-de-servicios-adicionales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionDeServiciosAdicionalesPageRoutingModule
  ],
  declarations: [DescripcionDeServiciosAdicionalesPage]
})
export class DescripcionDeServiciosAdicionalesPageModule {}

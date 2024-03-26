import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescripcionDeDireccionPageRoutingModule } from './descripcion-de-direccion-routing.module';

import { DescripcionDeDireccionPage } from './descripcion-de-direccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionDeDireccionPageRoutingModule
  ],
  declarations: [DescripcionDeDireccionPage]
})
export class DescripcionDeDireccionPageModule {}

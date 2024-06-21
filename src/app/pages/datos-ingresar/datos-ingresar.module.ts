import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosIngresarPageRoutingModule } from './datos-ingresar-routing.module';

import { DatosIngresarPage } from './datos-ingresar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosIngresarPageRoutingModule
  ],
  declarations: [DatosIngresarPage]
})
export class DatosIngresarPageModule {}

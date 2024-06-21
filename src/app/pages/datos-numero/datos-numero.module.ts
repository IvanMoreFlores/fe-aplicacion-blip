import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosNumeroPageRoutingModule } from './datos-numero-routing.module';

import { DatosNumeroPage } from './datos-numero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosNumeroPageRoutingModule
  ],
  declarations: [DatosNumeroPage]
})
export class DatosNumeroPageModule {}

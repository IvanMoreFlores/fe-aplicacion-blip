import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacionDeIdentidadPageRoutingModule } from './confirmacion-de-identidad-routing.module';

import { ConfirmacionDeIdentidadPage } from './confirmacion-de-identidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacionDeIdentidadPageRoutingModule
  ],
  declarations: [ConfirmacionDeIdentidadPage]
})
export class ConfirmacionDeIdentidadPageModule {}

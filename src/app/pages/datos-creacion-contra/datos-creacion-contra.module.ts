import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosCreacionContraPageRoutingModule } from './datos-creacion-contra-routing.module';

import { DatosCreacionContraPage } from './datos-creacion-contra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosCreacionContraPageRoutingModule
  ],
  declarations: [DatosCreacionContraPage]
})
export class DatosCreacionContraPageModule {}

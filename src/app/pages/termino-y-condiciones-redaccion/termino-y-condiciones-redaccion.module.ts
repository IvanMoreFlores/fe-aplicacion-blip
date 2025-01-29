import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerminoYCondicionesRedaccionPageRoutingModule } from './termino-y-condiciones-redaccion-routing.module';

import { TerminoYCondicionesRedaccionPage } from './termino-y-condiciones-redaccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerminoYCondicionesRedaccionPageRoutingModule
  ],
  declarations: [TerminoYCondicionesRedaccionPage]
})
export class TerminoYCondicionesRedaccionPageModule {}

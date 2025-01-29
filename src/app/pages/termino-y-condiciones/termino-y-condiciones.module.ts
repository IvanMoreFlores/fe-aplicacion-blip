import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerminoYCondicionesPageRoutingModule } from './termino-y-condiciones-routing.module';

import { TerminoYCondicionesPage } from './termino-y-condiciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerminoYCondicionesPageRoutingModule
  ],
  declarations: [TerminoYCondicionesPage]
})
export class TerminoYCondicionesPageModule {}

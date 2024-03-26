import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionPagoPageRoutingModule } from './configuracion-pago-routing.module';

import { ConfiguracionPagoPage } from './configuracion-pago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionPagoPageRoutingModule
  ],
  declarations: [ConfiguracionPagoPage]
})
export class ConfiguracionPagoPageModule {}

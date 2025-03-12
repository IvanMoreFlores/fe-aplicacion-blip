import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservasDetallesReciboPageRoutingModule } from './reservas-detalles-recibo-routing.module';

import { ReservasDetallesReciboPage } from './reservas-detalles-recibo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservasDetallesReciboPageRoutingModule
  ],
  declarations: [ReservasDetallesReciboPage]
})
export class ReservasDetallesReciboPageModule {}

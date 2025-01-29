import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservasDetallesPageRoutingModule } from './reservas-detalles-routing.module';

import { ReservasDetallesPage } from './reservas-detalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservasDetallesPageRoutingModule
  ],
  declarations: [ReservasDetallesPage]
})
export class ReservasDetallesPageModule {}

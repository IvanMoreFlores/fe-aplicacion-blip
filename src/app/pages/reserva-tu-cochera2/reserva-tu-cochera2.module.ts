import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservaTuCochera2PageRoutingModule } from './reserva-tu-cochera2-routing.module';

import { ReservaTuCochera2Page } from './reserva-tu-cochera2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservaTuCochera2PageRoutingModule
  ],
  declarations: [ReservaTuCochera2Page]
})
export class ReservaTuCochera2PageModule {}

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservaTuCocheraPageRoutingModule } from './reserva-tu-cochera-routing.module';

import { ReservaTuCocheraPage } from './reserva-tu-cochera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservaTuCocheraPageRoutingModule
  ],
  declarations: [ReservaTuCocheraPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ReservaTuCocheraPageModule {}

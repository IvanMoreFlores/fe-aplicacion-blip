import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservasReportarPageRoutingModule } from './reservas-reportar-routing.module';

import { ReservasReportarPage } from './reservas-reportar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservasReportarPageRoutingModule
  ],
  declarations: [ReservasReportarPage]
})
export class ReservasReportarPageModule {}

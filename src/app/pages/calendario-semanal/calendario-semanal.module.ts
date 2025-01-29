import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioSemanalPageRoutingModule } from './calendario-semanal-routing.module';

import { CalendarioSemanalPage } from './calendario-semanal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioSemanalPageRoutingModule
  ],
  declarations: [CalendarioSemanalPage]
})
export class CalendarioSemanalPageModule {}

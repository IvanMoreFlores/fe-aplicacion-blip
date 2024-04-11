import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioMesPageRoutingModule } from './calendario-mes-routing.module';

import { CalendarioMesPage } from './calendario-mes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioMesPageRoutingModule
  ],
  declarations: [CalendarioMesPage]
})
export class CalendarioMesPageModule {}

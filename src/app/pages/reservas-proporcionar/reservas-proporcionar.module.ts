import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservasProporcionarPageRoutingModule } from './reservas-proporcionar-routing.module';

import { ReservasProporcionarPage } from './reservas-proporcionar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservasProporcionarPageRoutingModule
  ],
  declarations: [ReservasProporcionarPage]
})
export class ReservasProporcionarPageModule {}

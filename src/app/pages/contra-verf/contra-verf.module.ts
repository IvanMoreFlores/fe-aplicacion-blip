import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContraVerfPageRoutingModule } from './contra-verf-routing.module';

import { ContraVerfPage } from './contra-verf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContraVerfPageRoutingModule
  ],
  declarations: [ContraVerfPage]
})
export class ContraVerfPageModule {}

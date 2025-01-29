import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcreProPageRoutingModule } from './acre-pro-routing.module';

import { AcreProPage } from './acre-pro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcreProPageRoutingModule
  ],
  declarations: [AcreProPage]
})
export class AcreProPageModule {}

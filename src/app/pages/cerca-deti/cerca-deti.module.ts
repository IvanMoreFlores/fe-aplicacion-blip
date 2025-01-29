import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CercaDetiPageRoutingModule } from './cerca-deti-routing.module';

import { CercaDetiPage } from './cerca-deti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CercaDetiPageRoutingModule
  ],
  declarations: [CercaDetiPage]
})
export class CercaDetiPageModule {}

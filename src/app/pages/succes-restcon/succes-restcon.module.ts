import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccesRestconPageRoutingModule } from './succes-restcon-routing.module';

import { SuccesRestconPage } from './succes-restcon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccesRestconPageRoutingModule
  ],
  declarations: [SuccesRestconPage]
})
export class SuccesRestconPageModule {}

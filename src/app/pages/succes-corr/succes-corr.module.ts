import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccesCorrPageRoutingModule } from './succes-corr-routing.module';

import { SuccesCorrPage } from './succes-corr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccesCorrPageRoutingModule
  ],
  declarations: [SuccesCorrPage]
})
export class SuccesCorrPageModule {}

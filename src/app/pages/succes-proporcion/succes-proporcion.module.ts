import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccesProporcionPageRoutingModule } from './succes-proporcion-routing.module';

import { SuccesProporcionPage } from './succes-proporcion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccesProporcionPageRoutingModule
  ],
  declarations: [SuccesProporcionPage]
})
export class SuccesProporcionPageModule {}

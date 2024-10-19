import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidacionIdnPageRoutingModule } from './validacion-idn-routing.module';

import { ValidacionIdnPage } from './validacion-idn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidacionIdnPageRoutingModule
  ],
  declarations: [ValidacionIdnPage]
})
export class ValidacionIdnPageModule {}

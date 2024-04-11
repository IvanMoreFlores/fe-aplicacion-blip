import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostraEstaPageRoutingModule } from './mostra-esta-routing.module';

import { MostraEstaPage } from './mostra-esta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostraEstaPageRoutingModule
  ],
  declarations: [MostraEstaPage],
  schemas:  [CUSTOM_ELEMENTS_SCHEMA]
})
export class MostraEstaPageModule {}

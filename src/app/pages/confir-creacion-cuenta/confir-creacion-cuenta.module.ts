import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirCreacionCuentaPageRoutingModule } from './confir-creacion-cuenta-routing.module';

import { ConfirCreacionCuentaPage } from './confir-creacion-cuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirCreacionCuentaPageRoutingModule
  ],
  declarations: [ConfirCreacionCuentaPage]
})
export class ConfirCreacionCuentaPageModule {}

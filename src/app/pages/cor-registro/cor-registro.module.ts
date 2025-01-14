import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorRegistroPageRoutingModule } from './cor-registro-routing.module';

import { CorRegistroPage } from './cor-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorRegistroPageRoutingModule
  ],
  declarations: [CorRegistroPage]
})
export class CorRegistroPageModule {}

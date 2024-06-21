import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuCuenPageRoutingModule } from './recu-cuen-routing.module';

import { RecuCuenPage } from './recu-cuen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuCuenPageRoutingModule
  ],
  declarations: [RecuCuenPage]
})
export class RecuCuenPageModule {}

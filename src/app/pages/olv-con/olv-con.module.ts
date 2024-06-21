import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvConPageRoutingModule } from './olv-con-routing.module';

import { OlvConPage } from './olv-con.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvConPageRoutingModule
  ],
  declarations: [OlvConPage]
})
export class OlvConPageModule {}

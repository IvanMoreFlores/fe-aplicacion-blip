import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliPrefPageRoutingModule } from './eli-pref-routing.module';

import { EliPrefPage } from './eli-pref.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliPrefPageRoutingModule
  ],
  declarations: [EliPrefPage]
})
export class EliPrefPageModule {}

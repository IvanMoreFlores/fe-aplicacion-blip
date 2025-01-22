import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorControlvPageRoutingModule } from './cor-controlv-routing.module';

import { CorControlvPage } from './cor-controlv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorControlvPageRoutingModule
  ],
  declarations: [CorControlvPage]
})
export class CorControlvPageModule {}

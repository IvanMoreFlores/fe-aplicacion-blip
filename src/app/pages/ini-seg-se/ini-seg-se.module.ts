import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniSegSePageRoutingModule } from './ini-seg-se-routing.module';

import { IniSegSePage } from './ini-seg-se.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniSegSePageRoutingModule
  ],
  declarations: [IniSegSePage]
})
export class IniSegSePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogBinPageRoutingModule } from './log-bin-routing.module';

import { LogBinPage } from './log-bin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogBinPageRoutingModule
  ],
  declarations: [LogBinPage]
})
export class LogBinPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogConPageRoutingModule } from './log-con-routing.module';

import { LogConPage } from './log-con.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogConPageRoutingModule
  ],
  declarations: [LogConPage]
})
export class LogConPageModule {}

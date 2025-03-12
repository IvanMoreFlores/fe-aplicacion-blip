import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LogBinPageRoutingModule } from './log-bin-routing.module';
import { LogBinPage } from './log-bin.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogBinPageRoutingModule,
    SharedModule,
  ],
  declarations: [LogBinPage],
})
export class LogBinPageModule {}

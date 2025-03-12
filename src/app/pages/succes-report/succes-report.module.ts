import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccesReportPageRoutingModule } from './succes-report-routing.module';

import { SuccesReportPage } from './succes-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccesReportPageRoutingModule
  ],
  declarations: [SuccesReportPage]
})
export class SuccesReportPageModule {}

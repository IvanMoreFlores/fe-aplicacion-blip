import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccesCorPageRoutingModule } from './succes-cor-routing.module';

import { SuccesCorPage } from './succes-cor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccesCorPageRoutingModule
  ],
  declarations: [SuccesCorPage]
})
export class SuccesCorPageModule {}

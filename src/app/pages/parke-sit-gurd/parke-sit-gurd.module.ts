import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkeSitGurdPageRoutingModule } from './parke-sit-gurd-routing.module';

import { ParkeSitGurdPage } from './parke-sit-gurd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParkeSitGurdPageRoutingModule
  ],
  declarations: [ParkeSitGurdPage]
})
export class ParkeSitGurdPageModule {}

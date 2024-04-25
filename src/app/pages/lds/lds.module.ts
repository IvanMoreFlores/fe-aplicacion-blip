import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LdsPageRoutingModule } from './lds-routing.module';

import { LdsPage } from './lds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LdsPageRoutingModule
  ],
  declarations: [LdsPage]
})
export class LdsPageModule {}

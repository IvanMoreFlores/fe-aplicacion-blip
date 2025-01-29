import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecibTip3PageRoutingModule } from './recib-tip3-routing.module';

import { RecibTip3Page } from './recib-tip3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecibTip3PageRoutingModule
  ],
  declarations: [RecibTip3Page]
})
export class RecibTip3PageModule {}

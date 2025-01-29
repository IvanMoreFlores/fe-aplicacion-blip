import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecibTip2PageRoutingModule } from './recib-tip2-routing.module';

import { RecibTip2Page } from './recib-tip2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecibTip2PageRoutingModule
  ],
  declarations: [RecibTip2Page]
})
export class RecibTip2PageModule {}

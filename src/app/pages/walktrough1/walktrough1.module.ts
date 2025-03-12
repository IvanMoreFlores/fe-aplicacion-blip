import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Walktrough1PageRoutingModule } from './walktrough1-routing.module';

import { Walktrough1Page } from './walktrough1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Walktrough1PageRoutingModule
  ],
  declarations: [Walktrough1Page]
})
export class Walktrough1PageModule {}

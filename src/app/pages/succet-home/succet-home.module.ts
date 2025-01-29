import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccetHomePageRoutingModule } from './succet-home-routing.module';

import { SuccetHomePage } from './succet-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccetHomePageRoutingModule
  ],
  declarations: [SuccetHomePage]
})
export class SuccetHomePageModule {}

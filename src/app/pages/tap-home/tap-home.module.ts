import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TapHomePageRoutingModule } from './tap-home-routing.module';

import { TapHomePage } from './tap-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TapHomePageRoutingModule
  ],
  declarations: [TapHomePage]
})
export class TapHomePageModule {}

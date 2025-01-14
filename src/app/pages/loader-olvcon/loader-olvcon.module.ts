import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoaderOlvconPageRoutingModule } from './loader-olvcon-routing.module';

import { LoaderOlvconPage } from './loader-olvcon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoaderOlvconPageRoutingModule
  ],
  declarations: [LoaderOlvconPage]
})
export class LoaderOlvconPageModule {}

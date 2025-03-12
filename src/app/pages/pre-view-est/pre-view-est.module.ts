import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreViewEstPageRoutingModule } from './pre-view-est-routing.module';

import { PreViewEstPage } from './pre-view-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreViewEstPageRoutingModule
  ],
  declarations: [PreViewEstPage]
})
export class PreViewEstPageModule {}

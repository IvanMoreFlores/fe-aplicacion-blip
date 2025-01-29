import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewEstPageRoutingModule } from './view-est-routing.module';

import { ViewEstPage } from './view-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewEstPageRoutingModule
  ],
  declarations: [ViewEstPage]
})
export class ViewEstPageModule {}

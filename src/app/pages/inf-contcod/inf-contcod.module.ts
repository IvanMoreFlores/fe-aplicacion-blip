import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfContcodPageRoutingModule } from './inf-contcod-routing.module';

import { InfContcodPage } from './inf-contcod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfContcodPageRoutingModule
  ],
  declarations: [InfContcodPage]
})
export class InfContcodPageModule {}

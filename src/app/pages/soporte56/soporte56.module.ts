import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Soporte56PageRoutingModule } from './soporte56-routing.module';

import { Soporte56Page } from './soporte56.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Soporte56PageRoutingModule
  ],
  declarations: [Soporte56Page]
})
export class Soporte56PageModule {}

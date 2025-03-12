import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnboarPageRoutingModule } from './onboar-routing.module';

import { OnboarPage } from './onboar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnboarPageRoutingModule
  ],
  declarations: [OnboarPage]
})
export class OnboarPageModule {}

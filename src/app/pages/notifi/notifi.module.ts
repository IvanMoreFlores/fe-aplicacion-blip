import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotifiPageRoutingModule } from './notifi-routing.module';

import { NotifiPage } from './notifi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotifiPageRoutingModule
  ],
  declarations: [NotifiPage]
})
export class NotifiPageModule {}

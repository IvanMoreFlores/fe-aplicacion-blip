import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsCorreoPageRoutingModule } from './us-correo-routing.module';

import { UsCorreoPage } from './us-correo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsCorreoPageRoutingModule
  ],
  declarations: [UsCorreoPage]
})
export class UsCorreoPageModule {}

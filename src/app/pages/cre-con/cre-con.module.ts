import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreConPageRoutingModule } from './cre-con-routing.module';

import { CreConPage } from './cre-con.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreConPageRoutingModule
  ],
  declarations: [CreConPage]
})
export class CreConPageModule {}

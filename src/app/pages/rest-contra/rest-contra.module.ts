import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestContraPageRoutingModule } from './rest-contra-routing.module';

import { RestContraPage } from './rest-contra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestContraPageRoutingModule
  ],
  declarations: [RestContraPage]
})
export class RestContraPageModule {}

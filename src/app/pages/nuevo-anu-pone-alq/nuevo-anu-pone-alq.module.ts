import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoAnuPoneAlqPageRoutingModule } from './nuevo-anu-pone-alq-routing.module';

import { NuevoAnuPoneAlqPage } from './nuevo-anu-pone-alq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoAnuPoneAlqPageRoutingModule
  ],
  declarations: [NuevoAnuPoneAlqPage]
})
export class NuevoAnuPoneAlqPageModule {}

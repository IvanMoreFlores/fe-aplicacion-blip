import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimeParkPageRoutingModule } from './time-park-routing.module';

import { TimeParkPage } from './time-park.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimeParkPageRoutingModule
  ],
  declarations: [TimeParkPage]
})
export class TimeParkPageModule {}

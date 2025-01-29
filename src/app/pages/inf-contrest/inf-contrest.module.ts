import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfContrestPageRoutingModule } from './inf-contrest-routing.module';

import { InfContrestPage } from './inf-contrest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfContrestPageRoutingModule
  ],
  declarations: [InfContrestPage]
})
export class InfContrestPageModule {}
